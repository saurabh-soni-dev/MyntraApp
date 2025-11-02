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
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
  cartText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.pink,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainerStyle: {
    flex: 1,
    rowGap: 10,
  },
  card: {
    borderWidth: 0.2,
    padding: 10,
    width: width / 2 - 20,
    borderRadius: 10,
  },
  thumbnail: {
    height: 150,
    width: 150,
  },
  titleStyle: {
    fontSize: 14,
    color: colors.black,
  },
  priceStyle: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '700',
    color: colors.green,
  },
  brandStyle: {
    marginTop: 3,
    fontSize: 15,
    color: colors.black,
  },
  addToCartButton: {
    height: 30,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 6,
  },
  removeToCartButton: {
    height: 30,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 6,
  },
  addToCartText: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '600',
  },
});
