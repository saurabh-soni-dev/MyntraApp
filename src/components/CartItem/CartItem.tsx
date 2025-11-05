import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CartItem.style';

type CartItemProps = {
  item: {
    id: number;
    title: string;
    thumbnail: string;
    price: string;
    brand?: string;
  };
  quantity: number;
  canDecrease: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
};

export const CartItem = memo(
  ({
    item,
    quantity,
    canDecrease,
    onIncrement,
    onDecrement,
    onRemove,
  }: CartItemProps) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          progressiveRenderingEnabled={true}
          fadeDuration={300}
        />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.brand}>{item.brand || 'Myntra Brand'}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>

          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={[styles.qtyBtn, !canDecrease && styles.qtyBtnDisabled]}
              onPress={onDecrement}
              disabled={!canDecrease}
              activeOpacity={0.7}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyCount}>{quantity}</Text>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={onIncrement}
              activeOpacity={0.7}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onRemove} activeOpacity={0.7}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison to prevent unnecessary re-renders
    return (
      prevProps.item.id === nextProps.item.id &&
      prevProps.quantity === nextProps.quantity &&
      prevProps.canDecrease === nextProps.canDecrease
    );
  },
);
