import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, scale } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#111',
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
    color: '#e91e63',
    fontWeight: '600',
  },
  cartTextDisabled: {
    color: '#999',
  },
  listContainer: {
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(80),
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(8),
    elevation: 3,
    padding: scale(10),
    borderWidth: 0.2,
  },
  image: {
    width: '100%',
    height: verticalScale(150),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(8),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: moderateScale(14),
    color: 'green',
    fontWeight: '600',
    marginBottom: verticalScale(8),
  },
  addButton: {
    backgroundColor: '#e91e63',
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#f8bbd0',
  },
  goToCartButton: {
    backgroundColor: '#2196f3', // A nice blue color to differentiate from Add to Cart
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: moderateScale(14),
  },
  bottomButton: {
    backgroundColor: '#000',
    paddingVertical: verticalScale(14),
    marginHorizontal: scale(15),
    marginBottom: verticalScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
  },
  bottomText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    gap: scale(8),
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(8),
    backgroundColor: '#fafafa',
  },
  filterButton: {
    marginLeft: scale(8),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(8),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  filterText: {
    color: '#333',
    fontWeight: '600',
  },
});
