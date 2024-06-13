import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => navigation.navigate('Details', { pizza: item })}
      >
        {item.name} - Quantity: {item.quantity}
      </Text>
    </View>
  );
};

export default CartItem;
