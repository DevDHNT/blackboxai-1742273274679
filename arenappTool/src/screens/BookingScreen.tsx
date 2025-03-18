import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingScreen: React.FC = () => {
  const handleBooking = () => {
    // Aqui você pode implementar a lógica para selecionar a data e horário
    console.log('Selecione uma data e horário para a reserva.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento de Arena</Text>
      <Button title="Selecionar Data e Horário" onPress={handleBooking} />
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
});

export default BookingScreen;