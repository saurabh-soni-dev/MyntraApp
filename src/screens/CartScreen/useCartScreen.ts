import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../context/CartContext';
import { Product } from '../../context/CartContext';

export type CartItemProps = {
  item: Product;
  quantity: number;
  canDecrease: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
};

const useCartScreen = () => {
  const {
    cart,
    incrementQty,
    decrementQty,
    removeToCart,
    total,
    clearCart,
    canDecreaseQty,
    getItemQuantity,
  } = useCart();
  const navigation = useNavigation<any>();

  const handleCheckout = useCallback(() => {
    navigation.navigate('ProductListScreen');
    clearCart();
  }, [navigation, clearCart]);

  const getCartItemProps = useCallback(
    (item: Product): CartItemProps => ({
      item,
      quantity: getItemQuantity(item.id),
      canDecrease: canDecreaseQty(item.id),
      onIncrement: () => incrementQty(item.id),
      onDecrement: () => decrementQty(item.id),
      onRemove: () => removeToCart(item.id),
    }),
    [getItemQuantity, canDecreaseQty, incrementQty, decrementQty, removeToCart],
  );

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleContinueShopping = useCallback(() => {
    navigation.navigate('ProductListScreen');
  }, [navigation]);

  return {
    cart,
    total,
    getCartItemProps,
    handleGoBack,
    handleContinueShopping,
    handleCheckout,
    keyExtractor,
  };
};

export default useCartScreen;
