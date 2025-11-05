import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
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
});
