import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  cartText: {
    fontSize: 16,
    color: '#e91e63',
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    elevation: 3,
    padding: 10,
    borderWidth: 0.2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: 'green',
    fontWeight: '600',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
  },
  bottomText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
