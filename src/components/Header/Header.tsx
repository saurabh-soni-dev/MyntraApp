import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Header.style';

type HeaderProps = {
  cartCount: number;
  onCartPress: () => void;
};

export const Header = ({ cartCount, onCartPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>App Like Myntra</Text>
      <TouchableOpacity
        onPress={onCartPress}
        style={[
          styles.cartButton,
          cartCount === 0 && styles.cartButtonDisabled,
        ]}
      >
        <Text
          style={[styles.cartText, cartCount === 0 && styles.cartTextDisabled]}
        >
          🛒 Cart ({cartCount})
        </Text>
      </TouchableOpacity>
    </View>
  );
};
