import { StyleSheet } from 'react-native'

import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />

            <ThemedText title={true} style={styles.title}>Login to your Account</ThemedText>

            <Spacer height={100} />

            <ThemedText style={{ textAlign: 'center' }}>
                Don't have an account?
                <Link href="/register"> Register</Link>
            </ThemedText>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    link: {
        textAlign: 'center'
    }
})