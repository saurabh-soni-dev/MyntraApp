import { createContext, ReactNode, useContext, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  total: number;
  addToCart: (item: Product) => void;
  removeToCart: (id: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0,
  );

  const addToCart = (item: Product) => {
    setCart(prevState => {
      const existing = prevState?.find(p => p.id === item.id);
      if (existing) {
        return prevState?.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity || 1 } : item,
        );
      }
      return [...prevState, { ...item, quantity: 1 }];
    });
  };

  const removeToCart = (id: number) => {
    setCart(prevState => prevState.filter(p => p.id !== id));
  };

  const incrementQty = (id: number) => {
    setCart(prevState =>
      prevState.map(p =>
        p.id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
      ),
    );
  };

  const decrementQty = (id: number) => {
    setCart(prevState =>
      prevState
        .map(p => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter(p => p.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeToCart,
        incrementQty,
        decrementQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('Need to warp app with cartprovider');
  return context;
};
