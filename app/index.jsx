import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedLogo from '../components/ThemedLogo'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
    return (
        <>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title} title={true}>Ryoiki Tenkai</ThemedText>
                <ThemedLogo style={styles.img} />
                <Spacer height={20} />
                <ThemedText style={[styles.content, { color: 'purple' }]}>Clients and Servers something</ThemedText>
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.content}>To Be Continued...</ThemedText>
                </ThemedView>
                <ThemedView>
                    <Link href="/login" style={styles.button}><ThemedText>Login Page</ThemedText></Link>
                    <Link href="/register" style={styles.button}><ThemedText>Register Page</ThemedText></Link>
                </ThemedView>
            </ThemedView>
        </>
    )
}

export default Home

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
    card: {
        backgroundColor: '#100909ff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
    }
})