import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useCart } from '../../context/CartContext';

export type RawProduct = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  category?: string;
  brand?: string;
};

type Filters = {
  category?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  sortBy?: 'price_asc' | 'price_desc' | null;
};

export const useProductListScreen = () => {
  // -------- 🧠 Product States --------
  const [products, setProducts] = useState<RawProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    category: null,
    minPrice: null,
    maxPrice: null,
    sortBy: null,
  });
  const [filterVisible, setFilterVisible] = useState(false);

  const navigation = useNavigation<any>();
  const { addToCart, cart } = useCart();

  // -------- 📦 Fetch Products --------
  const fetchProducts = async (pageNumber: number, isRefreshing = false) => {
    const limit = 20;
    const skip = pageNumber * limit;

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data = await response.json();

      const mapped: RawProduct[] = (data.products || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        thumbnail: p.thumbnail,
        price: Number(p.price),
        category: p.category,
        brand: p.brand,
      }));

      setProducts(prev => (isRefreshing ? mapped : [...prev, ...mapped]));
      setHasMore(mapped.length === limit);
      return true;
    } catch (error) {
      console.error('Error fetching products:', error);
      return false;
    }
  };

  // -------- 🔁 Refresh & Load More --------
  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(0);
    await fetchProducts(0, true);
    setRefreshing(false);
  }, []);

  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await fetchProducts(page + 1);
    setPage(prev => prev + 1);
    setLoading(false);
  }, [loading, hasMore, page]);

  // -------- 🚀 Initial Fetch --------
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProducts(0).finally(() => {
      if (mounted) setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // -------- 🏷️ Derived Data --------
  const categories = useMemo(() => {
    const s = new Set<string>();
    products.forEach(p => p.category && s.add(p.category));
    return Array.from(s).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    let list = products.slice();

    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }

    if (filters.category) {
      list = list.filter(p => p.category === filters.category);
    }

    if (filters.minPrice != null) {
      list = list.filter(p => p.price >= (filters.minPrice || 0));
    }

    if (filters.maxPrice != null) {
      list = list.filter(
        p => p.price <= (filters.maxPrice || Number.MAX_SAFE_INTEGER),
      );
    }

    if (filters.sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price_desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, searchTerm, filters]);

  // -------- 🧹 Filter Actions --------
  const clearFilters = useCallback(() => {
    setFilters({
      category: null,
      minPrice: null,
      maxPrice: null,
      sortBy: null,
    });
  }, []);

  const handleFilterOpen = useCallback(() => setFilterVisible(true), []);
  const handleFilterClose = useCallback(() => setFilterVisible(false), []);

  // -------- 🛒 Cart Logic --------
  const handleCartPress = useCallback(() => {
    if (cart.length > 0) {
      navigation.navigate('CartScreen');
    } else {
      Alert.alert('Empty Cart', 'Add some items to your cart first!');
    }
  }, [cart.length, navigation]);

  const handleAddToCart = useCallback(
    (item: RawProduct) => {
      addToCart({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: String(item.price),
        quantity: 1,
      });
    },
    [addToCart],
  );

  const handleItemPress = useCallback(
    (item: RawProduct, isInCart: boolean) => {
      if (isInCart) {
        navigation.navigate('CartScreen');
      } else {
        handleAddToCart(item);
      }
    },
    [handleAddToCart, navigation],
  );

  const isItemInCart = useCallback(
    (id: number) => cart.some(item => item.id === id),
    [cart],
  );

  // -------- 📦 Return All --------
  return {
    // Product Data
    filteredProducts,
    loading,
    refreshing,
    hasMore,
    categories,
    searchTerm,
    filters,
    filterVisible,

    // Filter Actions
    handleFilterOpen,
    handleFilterClose,
    setSearchTerm,
    setFilters,
    clearFilters,

    // List Actions
    handleRefresh,
    handleLoadMore,

    // Cart Actions
    handleCartPress,
    handleItemPress,
    isItemInCart,

    // Cart State
    cart,
  } as const;
};
