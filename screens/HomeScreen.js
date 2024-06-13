// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank')
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Listing</Text>
      {isLoading ? (
        <Text>Loading pizzas...</Text>
      ) : (
        <View>
          {pizzas.map((pizza) => (
            <View key={pizza.id} style={styles.item}>
              <Text>{pizza.name}</Text>
              <Button
                title="View Details"
                onPress={() => navigation.navigate('Details', { pizza })}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
});

export default HomeScreen;
