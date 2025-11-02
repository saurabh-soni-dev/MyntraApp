import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.pink,
  },
  productListContainer: {
    flex: 1,
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsContentContainerStyle: {
    flex: 1,
    rowGap: 10,
    padding: 15,
  },
  productColumnWrapperStyle: {
    justifyContent: 'space-between',
  },

  productCard: {
    borderWidth: 0.2,
    padding: 12,
    width: width / 2 - 20,
    borderRadius: 10,
  },
  thumbnail: {
    height: 160,
    width: 150,
  },
  titleStyle: {
    fontSize: 16,
    color: colors.black,
  },
  brandStyle: {
    marginTop: 1,
    fontSize: 12,
    color: colors.black,
  },
  priceStyle: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },

  removeToCartButton: {
    height: 35,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 6,
  },

  addToCartButton: {
    height: 35,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 6,
  },

  addToCartText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '500',
  },
});
