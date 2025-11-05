import React, { FC } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import { scale } from '../../utils/responsive';
import CustomStatusBar from '../../components/CustomStatusBar';
import { Header } from '../../components/Header/Header';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import FilterModal from './FilterModal';
import { styles } from './productListScreen.style';
import { colors } from '../../theme/colors';
import { useProductListController } from './useProductListController';
import { RawProduct } from './useProductListScreen';

const ProductListScreen: FC = () => {
  const {
    filteredProducts,
    loading,
    refreshing,
    searchTerm,
    filters,
    categories,
    hasMore,
    cart,
    filterVisible,
    handleFilterOpen,
    handleFilterClose,
    setSearchTerm,
    setFilters,
    clearFilters,
    handleRefresh,
    handleLoadMore,
    handleCartPress,
    handleItemPress,
    isItemInCart,
  } = useProductListController();

  const { width } = useWindowDimensions();
  const itemWidth = Math.floor((width - scale(30)) / 2);

  const renderItem = React.useCallback(
    ({ item }: { item: RawProduct }) => {
      const isInCart = isItemInCart(item.id);
      return (
        <ProductCard
          item={item}
          width={itemWidth}
          isInCart={isInCart}
          onPress={() => handleItemPress(item, isInCart)}
        />
      );
    },
    [itemWidth, isItemInCart, handleItemPress],
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header cartCount={cart.length} onCartPress={handleCartPress} />
      <SearchBar
        value={searchTerm}
        onChangeText={setSearchTerm}
        onFilterPress={handleFilterOpen}
      />
      <FilterModal
        visible={filterVisible}
        onClose={handleFilterClose}
        categories={categories}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        key="grid"
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        initialNumToRender={8}
        windowSize={5}
        updateCellsBatchingPeriod={50}
        ListFooterComponent={
          loading && hasMore ? (
            <View style={styles.footerLoader}>
              <ActivityIndicator size="large" color={colors.primary} />
            </View>
          ) : null
        }
        ListEmptyComponent={
          !loading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products found</Text>
            </View>
          ) : null
        }
      />

      {cart.length > 0 && (
        <TouchableOpacity style={styles.bottomButton} onPress={handleCartPress}>
          <Text style={styles.bottomText}>Go to Cart ({cart.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductListScreen;
