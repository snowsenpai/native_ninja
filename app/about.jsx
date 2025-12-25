import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>About</ThemedText>
            <ThemedText style={styles.content}>This is the About page.</ThemedText>

            <Link href="/" style={styles.button}>
                <ThemedText>Back to Home</ThemedText>
            </Link>
            <Link href="/contact" style={styles.button}>
                <ThemedText>Contact Page</ThemedText>
            </Link>
        </ThemedView>
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
        borderRadius: 5,
    }
})