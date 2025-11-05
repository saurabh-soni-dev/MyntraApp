import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
};

export const SearchBar = ({
  value,
  onChangeText,
  onFilterPress,
}: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search for products"
        value={value}
        onChangeText={onChangeText}
        style={styles.searchInput}
        returnKeyType="search"
      />
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    gap: scale(10),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(6),
    paddingHorizontal: scale(12),
    fontSize: moderateScale(14),
  },
  filterButton: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
  },
  filterText: {
    color: colors.text.muted,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});
