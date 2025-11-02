import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { FC } from 'react';
import { styles } from './cartScreen.style';
import CustomStatusBar from '../../components/CustomStatusBar';
import useCartScreen from './useCartScreen';
import { Product } from '../ProductListScreen/useProductListScreen';

const CartScreen: FC = () => {
  const {
    cart,
    total,
    removeToCart,
    increaseQty,
    decreaseQty,
    onCheckout,
    navigateToProductScreen,
  } = useCartScreen();

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: item?.thumbnail }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <View style={styles.detailsView}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => decreaseQty(item.id)}
              activeOpacity={0.6}
            >
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={styles.buttonText}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text>
              {'    '}
              {item.quantity}
              {'    '}
            </Text>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => increaseQty(item.id)}
              activeOpacity={0.6}
            >
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={styles.buttonText}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeToCart(item.id)}
            activeOpacity={0.6}
          >
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.removeButtonText}
            >
              remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headingText}>Cart({cart?.length})</Text>
        </View>

        {/* Cart item list */}
        <View style={styles.listContainer}>
          {cart?.length < 0 ? (
            <View style={styles.loaderView}>
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={styles.msgText}
              >
                No item are in cart!
              </Text>
              <TouchableOpacity
                style={styles.continueShoppingButton}
                onPress={navigateToProductScreen}
                activeOpacity={0.6}
              >
                <Text
                  numberOfLines={1}
                  allowFontScaling={false}
                  style={styles.buttonText}
                >
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={cart}
              keyExtractor={item => item?.id?.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          )}
        </View>
        <View style={styles.totalView}>
          <Text
            numberOfLines={1}
            allowFontScaling={false}
            style={styles.totalText}
          >
            Total:{' '}
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.totalAmountText}
            >
              ₹{total?.toFixed(2)}
            </Text>
          </Text>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={onCheckout}
            activeOpacity={0.6}
          >
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.buttonText}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
