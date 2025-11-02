import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../context/CartContext';
import { Alert } from 'react-native';

const useCartScreen = () => {
  const navigation = useNavigation<any>();
  const { cart, total, removeToCart, increaseQty, decreaseQty, clearCart } =
    useCart();

  const onCheckout = () => {
    Alert.alert('Checkout successfully!');
    clearCart();
    navigation.navigate('ProductListScreen');
  };

  const navigateToProductScreen = () => {
    navigation.navigate('ProductListScreen');
  };

  const backToProductScreen = () => {
    navigation.goBack();
  };

  return {
    cart,
    total,
    removeToCart,
    increaseQty,
    decreaseQty,
    onCheckout,
    navigateToProductScreen,
    backToProductScreen,
  };
};

export default useCartScreen;
