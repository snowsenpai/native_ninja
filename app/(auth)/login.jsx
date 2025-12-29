import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const router = useRouter()
    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
            router.push('/profile')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />

                <ThemedText title={true} style={styles.title}>Login to your Account</ThemedText>

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 15 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 15 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />

                <ThemedButton style={{ width: '40%' }} onPress={handleSubmit}>
                    <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Login</Text>
                </ThemedButton>

                <Spacer />

                {error && <ThemedText style={styles.error}>{error}</ThemedText>}

                <Spacer height={100} />

                <ThemedText style={{ textAlign: 'center' }}>
                    Don't have an account?
                    <Link href="/register"> Register</Link>
                </ThemedText>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    link: {
        textAlign: 'center'
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    }
})