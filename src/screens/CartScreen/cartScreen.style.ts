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
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
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
  continueShoppingButton: {
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  msgText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  totalView: {
    padding: 30,
    paddingBottom: 50,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
  totalAmountText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.black,
  },
  card: {
    padding: 10,
    borderWidth: 0.2,
    borderBottomWidth: 0.6,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  imageView: {
    height: 60,
    width: 60,
    backgroundColor: 'lightgray',
    borderRadius: 6,
    marginRight: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  titleStyle: {
    fontSize: 14,
    color: colors.black,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  qtyButton: {
    height: 35,
    width: 35,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  removeButton: {
    marginTop: 10,
  },
  removeButtonText: {
    fontSize: 16,
    color: colors.red,
    fontWeight: '500',
  },
  checkoutButton: {
    padding: 10,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
