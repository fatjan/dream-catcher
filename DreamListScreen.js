import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import DreamCard from './DreamCard';

const DreamListScreen = () => {
    const [dream, setDream] = useState('');
    const [dreamDetails, setDreamDetails] = useState('');
    const [dreamsList, setDreamsList] = useState([]);
  
    const addDream = () => {
      setDreamsList([...dreamsList, { dream: dream, details: dreamDetails }]);
      setDream('');
      setDreamDetails('');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Enter your dream"
            value={dream}
            onChangeText={setDream}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter dream details"
            value={dreamDetails}
            onChangeText={setDreamDetails}
        />
        <Button
            title="Add Dream"
            mode="contained"
            onPress={addDream}
            style={styles.addButton}
            labelStyle={styles.buttonLabel}
        >
            Add Dream
        </Button>
        {/* Add styling for the dream list */}
        {/* ... */}
        {/* Display the dream list */}
        {dreamsList.map((dream, index) => (
            <DreamCard key={index} dream={dream.dream} details={dream.details} />
        ))}
      </View>
    );
  };

  export default DreamListScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8A2BE2', // Lucid purple color
      paddingBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    addButton: {
        marginTop: 10, // Add top margin
        marginBottom: 20, // Add bottom margin
        width: '80%',
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
  });
  
  