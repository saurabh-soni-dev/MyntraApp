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
import { useCart } from '../../context/CartContext';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cart, incrementQty, decrementQty, removeToCart, total, clearCart } =
    useCart();
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
            style={styles.qtyBtn}
            onPress={() => decrementQty(item.id)}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyCount}>{item.quantity}</Text>
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
        <View style={{ width: 20 }} />
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
            contentContainerStyle={{ paddingBottom: 140 }}
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
    padding: 14,
    borderBottomWidth: 0.3,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrow: {
    fontSize: 22,
    color: '#333',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
  },
  image: {
    width: 90,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  brand: {
    fontSize: 12,
    color: '#777',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginTop: 4,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#ff4081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  qtyCount: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#333',
  },
  removeText: {
    color: '#ff3b30',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    borderTopWidth: 0.3,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  footerLeft: {
    flexDirection: 'column',
  },
  totalLabel: {
    fontSize: 13,
    color: '#777',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  checkoutBtn: {
    backgroundColor: '#ff4081',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  shopBtn: {
    backgroundColor: '#ff4081',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shopText: {
    color: '#fff',
    fontWeight: '600',
  },
});
