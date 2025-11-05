import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RawProduct } from '../../screens/ProductListScreen/useProductListScreen';
import { styles } from './ProductCard.style';

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
