import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';

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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: colors.text.primary,
  },
  cartButton: {
    padding: scale(8),
    borderRadius: moderateScale(6),
  },
  cartButtonDisabled: {
    opacity: 0.6,
  },
  cartText: {
    fontSize: moderateScale(16),
    color: colors.primary,
    fontWeight: '600',
  },
  cartTextDisabled: {
    color: colors.text.light,
  },
});
