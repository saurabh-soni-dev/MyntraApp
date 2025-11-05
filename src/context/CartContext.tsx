import { createContext, ReactNode, useContext, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  quantity: number;
  brand?: string;
  rating?: number;
}

interface CartContextType {
  cart: Product[];
  total: number;
  totalItems: number;
  addToCart: (item: Product) => void;
  removeToCart: (id: number) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
  clearCart: () => void;
  isItemInCart: (id: number) => boolean;
  getItemQuantity: (id: number) => number;
  canDecreaseQty: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0,
  );

  // Calculate total items (sum of quantities)
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Check if an item is in cart
  const isItemInCart = (id: number): boolean => {
    return cart.some(item => item.id === id);
  };

  // Get quantity of an item
  const getItemQuantity = (id: number): number => {
    const cartItem = cart.find(item => item.id === id);
    return cartItem?.quantity || 0;
  };

  // Check if quantity can be decreased (is > 1)
  const canDecreaseQty = (id: number): boolean => {
    const qty = getItemQuantity(id);
    return qty > 1;
  };

  // Add or increment item in cart
  const addToCart = (item: Product) => {
    setCart(prevState => {
      const existing = prevState.find(p => p.id === item.id);
      if (existing) {
        return prevState.map(p =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
        );
      }
      return [...prevState, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeToCart = (id: number) => {
    setCart(prevState => prevState.filter(p => p.id !== id));
  };

  // Increment item quantity
  const incrementQty = (id: number) => {
    setCart(prevState =>
      prevState.map(p =>
        p.id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
      ),
    );
  };

  // Decrement item quantity or remove if quantity becomes 0
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
        totalItems,
        addToCart,
        removeToCart,
        incrementQty,
        decrementQty,
        clearCart,
        isItemInCart,
        getItemQuantity,
        canDecreaseQty,
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
