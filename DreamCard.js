import { View, StyleSheet, Text } from 'react-native';

const DreamCard = ({ dream, details }) => (
    <View style={styles.card}>
        <Text style={styles.dreamText}>{dream}</Text>
        <Text style={styles.detailsText}>{details}</Text>
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
    dreamText: {
        width: '80%',
    },
    detailsText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
      },
  });
  
  