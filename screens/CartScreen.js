import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '/context/CartContext';

const CartScreen = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      <Text>Total Items: {cartItems.length}</Text>
      <View>
        {cartItems.map((item) => (
          <View key={item.id}>
            <Text
              onPress={() => navigation.navigate('Details', { pizza: item })}
            >
              {item.name} - Quantity: {item.quantity}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CartScreen;
