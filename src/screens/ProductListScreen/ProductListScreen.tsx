import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';
import useProductListScreen, { Product } from './useProductListScreen';
import { styles } from './productListScreen.style';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../theme/colors';

const ProductListScreen: FC = () => {
  const {
    navigateToCartScreen,
    products,
    loading,
    cart,
    addToCart,
    removeToCart,
  } = useProductListScreen();

  const renderItem = ({ item }: { item: Product }) => {
    const inCart = cart?.some(p => p.id === item.id);

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item?.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <Text
          style={styles.titleStyle}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {item?.title}
        </Text>
        <Text
          style={styles.brandStyle}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {item?.brand ?? 'Myntra'}
        </Text>
        <Text
          style={styles.priceStyle}
          numberOfLines={1}
          allowFontScaling={false}
        >
          ₹{item?.price?.toFixed(2)}
        </Text>
        {inCart ? (
          <TouchableOpacity
            style={styles.removeToCartButton}
            onPress={() => removeToCart(item.id)}
            activeOpacity={0.6}
          >
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.addToCartText}
            >
              Remove to cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart(item)}
            activeOpacity={0.6}
          >
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.addToCartText}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headingText}>App Like Myntra</Text>
          <TouchableOpacity onPress={navigateToCartScreen} activeOpacity={0.6}>
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              style={styles.cartText}
            >
              Cart ({cart?.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Product list */}
        <View style={styles.listContainer}>
          {loading ? (
            <View style={styles.loaderView}>
              <ActivityIndicator size={'large'} color={colors.black} />
            </View>
          ) : (
            <FlatList
              data={products}
              keyExtractor={item => item?.id?.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapperStyle}
              contentContainerStyle={styles.contentContainerStyle}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductListScreen;
