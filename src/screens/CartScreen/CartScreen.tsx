import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../components/CartItem/CartItem';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';
import { styles } from './CartScreen.style';
import useCartScreen from './useCartScreen';
import { Product } from '../../context/CartContext';

const EmptyComponent = ({
  onContinueShopping,
}: {
  onContinueShopping: () => void;
}) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>🛍️ Your cart is empty</Text>
    <TouchableOpacity
      style={styles.shopBtn}
      onPress={onContinueShopping}
      activeOpacity={0.7}
    >
      <Text style={styles.shopText}>Continue Shopping</Text>
    </TouchableOpacity>
  </View>
);

const CartScreen = () => {
  const {
    cart,
    total,
    handleCheckout,
    handleGoBack,
    handleContinueShopping,
    keyExtractor,
    getCartItemProps,
  } = useCartScreen();

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <CartItem {...getCartItemProps(item)} />,
    [getCartItemProps],
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Cart ({cart.length})</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Body */}
      {cart.length === 0 ? (
        <EmptyComponent onContinueShopping={handleContinueShopping} />
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            removeClippedSubviews={true}
            maxToRenderPerBatch={6}
            initialNumToRender={4}
            windowSize={5}
            updateCellsBatchingPeriod={50}
            showsVerticalScrollIndicator={false}
          />

          {/* Checkout Footer */}
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>₹ {total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={handleCheckout}
              activeOpacity={0.7}
            >
              <Text style={styles.checkoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
