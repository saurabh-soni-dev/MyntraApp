import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale, scale } from '../../utils/responsive';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
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
  listContainer: {
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(80),
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.background.primary,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(8),
    padding: scale(10),
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    color: colors.text.secondary,
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: moderateScale(14),
    color: colors.success.main,
    fontWeight: '600',
    marginBottom: verticalScale(8),
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(6),
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: colors.primaryLight,
  },
  goToCartButton: {
    backgroundColor: colors.secondary,
  },
  addText: {
    color: colors.background.primary,
    fontWeight: '600',
    fontSize: moderateScale(14),
  },
  bottomButton: {
    backgroundColor: colors.text.primary,
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
    color: colors.background.primary,
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
    borderColor: colors.border,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(8),
    backgroundColor: colors.background.secondary,
  },
  filterButton: {
    marginLeft: scale(8),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(8),
    backgroundColor: colors.background.primary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterText: {
    color: colors.text.muted,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  footerLoader: {
    paddingVertical: verticalScale(20),
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(50),
  },
  emptyText: {
    fontSize: moderateScale(16),
    color: colors.text.muted,
    textAlign: 'center',
  },
});
