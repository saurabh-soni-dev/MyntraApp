import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
    maxHeight: '70%',
    padding: scale(16),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  scroll: {
    marginTop: verticalScale(12),
  },
  sectionLabel: {
    fontWeight: '600',
    marginBottom: verticalScale(8),
  },
  categoryRow: {
    paddingVertical: verticalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceRow: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    padding: scale(8),
    borderRadius: moderateScale(6),
  },
  sortOption: {
    paddingVertical: verticalScale(8),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(12),
  },
  clearBtn: {
    padding: scale(10),
  },
  cancelBtn: {
    padding: scale(10),
    marginRight: scale(8),
  },
  applyBtn: {
    backgroundColor: '#ff4081',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(8),
  },
  mutedText: {
    color: '#666',
  },
  applyText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
