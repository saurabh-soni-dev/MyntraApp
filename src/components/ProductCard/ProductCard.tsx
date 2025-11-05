import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import { RawProduct } from '../../screens/ProductListScreen/useProductListScreen';

type ProductCardProps = {
  item: RawProduct;
  width: number;
  isInCart: boolean;
  onPress: () => void;
};

export const ProductCard = memo(
  ({ item, width, isInCart, onPress }: ProductCardProps) => {
    return (
      <View style={[styles.card, { width }]}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          resizeMode="cover"
          progressiveRenderingEnabled={true}
          fadeDuration={300}
        />
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>

        <TouchableOpacity
          style={[styles.addButton, isInCart && styles.goToCartButton]}
          onPress={onPress}
          activeOpacity={0.7}
        >
          <Text style={styles.addText}>
            {isInCart ? 'Go to Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.width === nextProps.width &&
      prevProps.isInCart === nextProps.isInCart
    );
  },
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.primary,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(8),
    padding: scale(10),
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
  },
  image: {
    width: '100%',
    height: verticalScale(150),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(8),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: colors.text.secondary,
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: moderateScale(14),
    color: colors.success.main,
    fontWeight: '600',
    marginBottom: verticalScale(8),
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
  goToCartButton: {
    backgroundColor: colors.secondary,
  },
  addText: {
    color: colors.background.primary,
    fontWeight: '600',
    fontSize: moderateScale(14),
  },
});
