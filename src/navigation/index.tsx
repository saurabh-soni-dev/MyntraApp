import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen';
import { CartProvider } from '../context/CartContext';

const Stack = createNativeStackNavigator();

const Route: FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default Route;
