import { useEffect, useMemo, useState } from 'react';

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

  const handleRefresh = async () => {
    setRefreshing(true);
    setPage(0);
    await fetchProducts(0, true);
    setRefreshing(false);
  };

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await fetchProducts(page + 1);
    setPage(prev => prev + 1);
    setLoading(false);
  };

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

  const categories = useMemo(() => {
    const s = new Set<string>();
    products.forEach(p => p.category && s.add(p.category));
    return Array.from(s).sort();
  }, [products]);

  const filtered = useMemo(() => {
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

  const clearFilters = () =>
    setFilters({
      category: null,
      minPrice: null,
      maxPrice: null,
      sortBy: null,
    });

  return {
    products,
    filteredProducts: filtered,
    loading,
    refreshing,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    clearFilters,
    categories,
    handleRefresh,
    handleLoadMore,
    hasMore,
  } as const;
};

export default useProductListScreen;
