import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const DreamListScreen = () => {
    const [dream, setDream] = useState('');
    const [dreamsList, setDreamsList] = useState([]);
  
    const addDream = () => {
      setDreamsList([...dreamsList, dream]);
      setDream('');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your dream"
          value={dream}
          onChangeText={setDream}
        />
        <Button title="Add Dream" onPress={addDream} />
        {/* Display the dream list */}
        {/* Add styling for the dream list */}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8A2BE2', // Lucid purple color
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  });
  
  