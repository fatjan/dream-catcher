import { View, StyleSheet, Text } from 'react-native';

const DreamCard = ({ dream }) => (
    <View style={styles.card}>
        <Text style={styles.dreamText}>{dream}</Text>
    </View>
);
  
export default DreamCard;

const styles = StyleSheet.create({
    // ...
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    dreamList: {
      width: '80%',
    },
  });
  
  