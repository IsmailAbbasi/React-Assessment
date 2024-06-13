import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { pizza } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      <Text>Name: {pizza.name}</Text>
      <Text>Description: {pizza.description}</Text>
      <Text>Price: {pizza.price}</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailsScreen;
