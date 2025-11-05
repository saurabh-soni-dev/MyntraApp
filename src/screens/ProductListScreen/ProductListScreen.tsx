import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { styles } from './productListScreen.style';
import CustomStatusBar from '../../components/CustomStatusBar';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../context/CartContext';
import { useCart } from '../../context/CartContext';

const screenWidth = Dimensions.get('window').width;

const ProductListScreen: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();
  const { addToCart, cart } = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={[styles.card, { width: screenWidth / 2 - 20 }]}>
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
        style={styles.addButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>App Like Myntra</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Text style={styles.cartText}>🛒 Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" color="#e91e63" />
        </View>
      ) : (
        <FlatList
          data={products}
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
