import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
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
});
