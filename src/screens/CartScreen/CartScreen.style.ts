import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    padding: verticalScale(14),
    borderBottomWidth: 0.3,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerSpacer: {
    width: scale(20),
  },
  backArrow: {
    fontSize: moderateScale(22),
    color: colors.text.primary,
  },
  headerText: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: colors.text.primary,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    marginHorizontal: scale(12),
    marginVertical: verticalScale(6),
    borderRadius: moderateScale(10),
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
    padding: scale(10),
  },
  image: {
    width: moderateScale(90),
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    marginLeft: scale(12),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: colors.text.primary,
  },
  brand: {
    fontSize: moderateScale(12),
    color: colors.text.muted,
  },
  price: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: colors.text.primary,
    marginTop: verticalScale(4),
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(6),
  },
  qtyBtn: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(6),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnDisabled: {
    backgroundColor: colors.primaryLight,
  },
  qtyText: {
    color: colors.background.primary,
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  qtyCount: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginHorizontal: scale(10),
    color: colors.text.primary,
  },
  removeText: {
    color: colors.error.main,
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginTop: verticalScale(8),
  },
  footer: {
    position: 'absolute',
    bottom: verticalScale(25),
    width: '100%',
    borderTopWidth: 0.3,
    borderColor: colors.border,
    backgroundColor: colors.background.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
  },
  footerLeft: {
    flexDirection: 'column',
  },
  totalLabel: {
    fontSize: moderateScale(13),
    color: colors.text.muted,
  },
  totalValue: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: colors.text.primary,
  },
  checkoutBtn: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(24),
    borderRadius: moderateScale(8),
  },
  checkoutText: {
    color: colors.background.primary,
    fontWeight: '700',
    fontSize: moderateScale(14),
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
    color: colors.text.muted,
    marginBottom: 20,
  },
  shopBtn: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(8),
  },
  shopText: {
    color: colors.background.primary,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: verticalScale(140),
  },
});
