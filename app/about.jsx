import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>This is the About page.</Text>

      <Link href="/" style={styles.button}>Back to Home</Link>
    </View>
  )
}

export default About

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