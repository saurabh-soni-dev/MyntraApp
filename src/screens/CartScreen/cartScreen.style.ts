import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

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
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },
  headingText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
    textAlign: 'center',
  },
  cartListContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 10,
  },
  continueShoppingButton: {
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 12,
  },
  continueShoppingButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
  cartContentContainerStyle: {
    flex: 1,
    rowGap: 10,
  },

  totalView: {
    padding: 30,
    paddingBottom: 40,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  totalAmountText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
  },
  checkoutButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  cartCard: {
    padding: 12,
    borderWidth: 0.1,
    borderBottomWidth: 0.6,
    flexDirection: 'row',
    borderRadius: 5,
  },
  imageView: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginRight: 15,
  },
  image: {
    height: 65,
    width: 65,
  },

  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  titleStyle: {
    fontSize: 16,
    color: colors.black,
  },

  qtyButtonStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },

  qtyTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },

  qtyButton: {
    height: 32,
    width: 32,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  removeButton: {
    paddingVertical: 10,
  },

  removeButtonText: {
    fontSize: 16,
    color: colors.red,
    fontWeight: '500',
  },
});
