import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { moderateScale, verticalScale, scale } from '../../utils/responsive';
import { useCart } from '../../context/CartContext';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';

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

  const handleCheckout = () => {
    Alert.alert(
      'Order Placed',
      `Your total is ₹${total}. Thank you for shopping 🛍️`,
      [{ text: 'OK', onPress: clearCart }],
    );
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.brand}>{item.brand || 'Myntra Brand'}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>

        <View style={styles.qtyContainer}>
          <TouchableOpacity
            style={[
              styles.qtyBtn,
              !canDecreaseQty(item.id) && styles.qtyBtnDisabled,
            ]}
            onPress={() => decrementQty(item.id)}
            disabled={!canDecreaseQty(item.id)}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyCount}>{getItemQuantity(item.id)}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => incrementQty(item.id)}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => removeToCart(item.id)}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
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
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>🛍️ Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopBtn}
            onPress={() => navigation.navigate('ProductListScreen')}
          >
            <Text style={styles.shopText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
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
    backgroundColor: '#fff',
  },
  header: {
    padding: verticalScale(14),
    borderBottomWidth: 0.3,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerSpacer: {
    width: scale(20),
  },
  backArrow: {
    fontSize: moderateScale(22),
    color: '#333',
  },
  headerText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: scale(12),
    marginVertical: verticalScale(6),
    borderRadius: moderateScale(10),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
    color: '#333',
  },
  brand: {
    fontSize: moderateScale(12),
    color: '#777',
  },
  price: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#222',
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
    backgroundColor: '#ff4081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnDisabled: {
    backgroundColor: '#f8bbd0',
  },
  qtyText: {
    color: '#fff',
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  qtyCount: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginHorizontal: scale(10),
    color: '#333',
  },
  removeText: {
    color: '#ff3b30',
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginTop: verticalScale(8),
  },
  footer: {
    position: 'absolute',
    bottom: verticalScale(25),
    width: '100%',
    borderTopWidth: 0.3,
    borderColor: '#ddd',
    backgroundColor: '#fff',
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
    color: '#777',
  },
  totalValue: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#222',
  },
  checkoutBtn: {
    backgroundColor: '#ff4081',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(24),
    borderRadius: moderateScale(8),
  },
  checkoutText: {
    color: '#fff',
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
    color: '#555',
    marginBottom: 20,
  },
  shopBtn: {
    backgroundColor: '#ff4081',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(8),
  },
  shopText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: verticalScale(140),
  },
});
