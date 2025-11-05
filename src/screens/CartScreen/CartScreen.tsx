import React, { useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { moderateScale, verticalScale, scale } from '../../utils/responsive';
import { colors } from '../../theme/colors';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { CartItem } from '../../components/CartItem/CartItem';
import CustomStatusBar from '../../components/CustomStatusBar/CustomStatusBar';

const CartScreen = () => {
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
    Alert.alert(
      'Order Placed',
      `Your total is ₹${total}. Thank you for shopping 🛍️`,
      [{ text: 'OK', onPress: clearCart }],
    );
  }, [total, clearCart]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <CartItem
        item={item}
        quantity={getItemQuantity(item.id)}
        canDecrease={canDecreaseQty(item.id)}
        onIncrement={() => incrementQty(item.id)}
        onDecrement={() => decrementQty(item.id)}
        onRemove={() => removeToCart(item.id)}
      />
    ),
    [getItemQuantity, canDecreaseQty, incrementQty, decrementQty, removeToCart],
  );

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const EmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>🛍️ Your cart is empty</Text>
        <TouchableOpacity
          style={styles.shopBtn}
          onPress={() => navigation.navigate('ProductListScreen')}
          activeOpacity={0.7}
        >
          <Text style={styles.shopText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    ),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Cart ({cart.length})</Text>
        <View style={styles.headerSpacer} />
      </View>

      {cart.length === 0 ? (
        <EmptyComponent />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    padding: verticalScale(14),
    borderBottomWidth: 0.3,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerSpacer: {
    width: scale(20),
  },
  backArrow: {
    fontSize: moderateScale(22),
    color: colors.text.primary,
  },
  headerText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: colors.text.primary,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    marginHorizontal: scale(12),
    marginVertical: verticalScale(6),
    borderRadius: moderateScale(10),
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: scale(10),
  },
  image: {
    width: moderateScale(90),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    marginLeft: scale(12),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: colors.text.primary,
  },
  brand: {
    fontSize: moderateScale(12),
    color: colors.text.muted,
  },
  price: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: colors.text.primary,
    marginTop: verticalScale(4),
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(6),
  },
  qtyBtn: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(6),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnDisabled: {
    backgroundColor: colors.primaryLight,
  },
  qtyText: {
    color: colors.background.primary,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  qtyCount: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginHorizontal: scale(10),
    color: colors.text.primary,
  },
  removeText: {
    color: colors.error.main,
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginTop: verticalScale(8),
  },
  footer: {
    position: 'absolute',
    bottom: verticalScale(25),
    width: '100%',
    borderTopWidth: 0.3,
    borderColor: colors.border,
    backgroundColor: colors.background.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
  },
  footerLeft: {
    flexDirection: 'column',
  },
  totalLabel: {
    fontSize: moderateScale(13),
    color: colors.text.muted,
  },
  totalValue: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: colors.text.primary,
  },
  checkoutBtn: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(24),
    borderRadius: moderateScale(8),
  },
  checkoutText: {
    color: colors.background.primary,
    fontWeight: '700',
    fontSize: moderateScale(14),
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
    color: colors.text.muted,
    marginBottom: 20,
  },
  shopBtn: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(8),
  },
  shopText: {
    color: colors.background.primary,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: verticalScale(140),
  },
});
