import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './SearchBar.style';

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
