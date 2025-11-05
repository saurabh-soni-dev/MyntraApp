import { useNavigation } from '@react-navigation/native';
import { useState, useCallback, useMemo } from 'react';
import { Alert } from 'react-native';
import { useCart } from '../../context/CartContext';
import { RawProduct, useProductListScreen } from './useProductListScreen';

export const useProductListController = () => {
  const {
    filteredProducts,
    loading,
    refreshing,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    categories,
    clearFilters,
    handleRefresh,
    handleLoadMore,
    hasMore,
  } = useProductListScreen();

  const navigation = useNavigation<any>();
  const { addToCart, cart } = useCart();
  const [filterVisible, setFilterVisible] = useState(false);

  const handleFilterOpen = useCallback(() => setFilterVisible(true), []);
  const handleFilterClose = useCallback(() => setFilterVisible(false), []);

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
  return {
    // Data
    filteredProducts,
    loading,
    refreshing,
    searchTerm,
    filters,
    categories,
    hasMore,
    cart,
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
  };
};
