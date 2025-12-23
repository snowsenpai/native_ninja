import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.content}>This is the Contact page.</Text>

      <Link href="/" style={styles.button}>Back to Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
    }
})