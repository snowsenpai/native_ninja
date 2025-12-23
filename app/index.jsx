import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/favicon.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ryoiki Tenkai</Text>
            <Image source={Logo} style={styles.img}></Image>
            <Text style={[styles.content, { color: 'purple' }]}>Clients and Servers something</Text>
            <View style={styles.card}>
                <Text style={styles.content}>To Be Continued...</Text>
            </View>
            <View>
                <Link href="/about" style={styles.button}>About Page</Link>
                <Link href="/contact" style={styles.button}>Contact Page</Link>
            </View>
        </View>
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
    img: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'eee',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
    }
})