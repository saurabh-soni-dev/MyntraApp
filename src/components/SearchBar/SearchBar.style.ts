import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    gap: scale(10),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(12),
    backgroundColor: colors.background.secondary,
    color: colors.text.primary,
  },
  filterButton: {
    paddingHorizontal: scale(15),
    justifyContent: 'center',
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
});
