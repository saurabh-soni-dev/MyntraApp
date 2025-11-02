import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '../screens/ProductListScreen/useProductListScreen';

interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeToCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  total: number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart(prevState => {
      const existing = prevState.find(p => p.id === item.id);
      if (existing) {
        return prevState?.map(p =>
          p.id === item.id ? { ...p, quantity: item.quantity || 1 } : p,
        );
      }
      return [...prevState, { ...item, quantity: 1 }];
    });
  };

  const removeToCart = (id: number) => {
    setCart(prevState => prevState?.filter(p => p.id !== id));
  };

  const increaseQty = (id: number) => {
    setCart(prevState =>
      prevState?.map(p =>
        p.id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setCart(prevState =>
      prevState
        ?.map(p => (p.id === id ? { ...p, quantity: p?.quantity - 1 } : p))
        .filter(np => np?.quantity > 0),
    );
  };

  const total = cart?.reduce((sum, p) => sum + p.price * (p?.quantity || 1), 0);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        increaseQty,
        decreaseQty,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('Need to wrap whole app with CartProvider');
  return context;
};
