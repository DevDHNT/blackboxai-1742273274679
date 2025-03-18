import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArenaDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Arena</Text>
      <Text style={styles.description}>
        Aqui você pode ver mais informações sobre a arena, incluindo horários disponíveis e preços.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});

export default ArenaDetailsScreen;