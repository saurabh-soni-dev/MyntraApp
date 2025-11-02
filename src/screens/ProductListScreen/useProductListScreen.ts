import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  quantity?: number;
}

const useProductListScreen = () => {
  const navigation = useNavigation<any>();
  const { cart, addToCart, removeToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then(res => res.json())
      .then(result => setProducts(result?.products))
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const navigateToCartScreen = () => {
    navigation.navigate('CartScreen');
  };

  return {
    navigateToCartScreen,
    products,
    loading,
    cart,
    addToCart,
    removeToCart,
  };
};

export default useProductListScreen;
