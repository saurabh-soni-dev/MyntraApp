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
    backToProductScreen,
  } = useCartScreen();

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.cartCard}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: item?.thumbnail }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View>
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            allowFontScaling={false}
          >
            {item?.title}
          </Text>
          <View style={styles.detailsView}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => decreaseQty(item.id)}
              activeOpacity={0.6}
            >
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={styles.qtyButtonStyle}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text
              allowFontScaling={false}
              numberOfLines={1}
              style={styles.qtyTextStyle}
            >
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
                style={styles.qtyButtonStyle}
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
          <TouchableOpacity activeOpacity={0.6} onPress={backToProductScreen}>
            <Text style={styles.headingText}>{'<-'}</Text>
          </TouchableOpacity>
          <Text style={styles.headingText}>Cart({cart?.length})</Text>
        </View>

        {/* Cart item list */}
        <View style={styles.cartListContainer}>
          {!cart?.length ? (
            <View style={styles.emptyView}>
              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={styles.emptyText}
              >
                No item are avialable in cart!
              </Text>
              <TouchableOpacity
                style={styles.continueShoppingButton}
                onPress={navigateToProductScreen}
                activeOpacity={0.6}
              >
                <Text
                  numberOfLines={1}
                  allowFontScaling={false}
                  style={styles.continueShoppingButtonText}
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
              contentContainerStyle={styles.cartContentContainerStyle}
            />
          )}
        </View>

        {total && (
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
                style={styles.continueShoppingButtonText}
              >
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CartScreen;
