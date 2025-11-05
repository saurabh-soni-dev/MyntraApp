import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React, { FC, useState } from 'react';
import { styles } from './productListScreen.style';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';
import { scale } from '../../utils/responsive';
import useProductListScreen from './useProductListScreen';
import FilterModal from './FilterModal';
import { TextInput } from 'react-native';

const ProductListScreen: FC = () => {
  const {
    filteredProducts,
    loading,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    categories,
    clearFilters,
  } = useProductListScreen();
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const { addToCart, cart } = useCart();
  const [filterVisible, setFilterVisible] = useState(false);

  const itemWidth = Math.floor((width - scale(30)) / 2);

  // data is provided by useProductListScreen

  const renderItem = ({ item }: { item: any }) => {
    const isInCart = cart.some(cartItem => cartItem.id === item.id);

    return (
      <View style={[styles.card, { width: itemWidth }]}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>

        <TouchableOpacity
          style={[styles.addButton, isInCart && styles.goToCartButton]}
          onPress={() => {
            if (isInCart) {
              navigation.navigate('CartScreen');
            } else {
              addToCart({
                id: item.id,
                title: item.title,
                thumbnail: item.thumbnail,
                price: String(item.price),
                quantity: 1,
              });
            }
          }}
        >
          <Text style={styles.addText}>
            {isInCart ? 'Go to Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>App Like Myntra</Text>
        <TouchableOpacity
          onPress={() => {
            if (cart.length > 0) {
              navigation.navigate('CartScreen');
            } else {
              // Optional: Show a message when cart is empty
              Alert.alert('Empty Cart', 'Add some items to your cart first!');
            }
          }}
          style={[
            styles.cartButton,
            cart.length === 0 && styles.cartButtonDisabled,
          ]}
        >
          <Text
            style={[
              styles.cartText,
              cart.length === 0 && styles.cartTextDisabled,
            ]}
          >
            🛒 Cart ({cart.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search + Filter */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for products"
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchInput}
          returnKeyType="search"
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        categories={categories}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      {/* Product Grid */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#e91e63" />
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Bottom Button */}
      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('CartScreen')}
        >
          <Text style={styles.bottomText}>Go to Cart ({cart.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductListScreen;
