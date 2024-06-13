import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PizzaList = ({ pizzas }) => {
  const navigation = useNavigation();

  return (
    <View>
      {pizzas.map((pizza) => (
        <View key={pizza.id}>
          <Text>{pizza.name}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('Details', { pizza })}
          />
        </View>
      ))}
    </View>
  );
};

export default PizzaList;
