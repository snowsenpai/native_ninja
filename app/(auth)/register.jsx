import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'

import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Register submitted:', { email, password })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />

                <ThemedText title={true} style={styles.title}>Register for an Account</ThemedText>

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
                    <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Register</Text>
                </ThemedButton>

                <Spacer height={100} />

                <ThemedText style={{ textAlign: 'center' }}>
                    Already have an account?
                    <Link href="/login"> Login</Link>
                </ThemedText>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Register

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
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
})