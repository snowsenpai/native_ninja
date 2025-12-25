import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>Contact</ThemedText>
            <ThemedText style={styles.content}>This is the Contact page.</ThemedText>

            <Link href="/" style={styles.button}>
                <ThemedText>Back to Home</ThemedText>
            </Link>
            <Link href="/about" style={styles.button}>
                <ThemedText>About Page</ThemedText>
            </Link>
        </ThemedView>
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
        borderRadius: 5,
    }
})