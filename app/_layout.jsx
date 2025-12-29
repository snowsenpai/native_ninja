import { Stack } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/Colors';
import { UserProvider } from '../context/UserContext';

const RootLayout = () => {
    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <UserProvider>
            <StatusBar value="auto" />
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.navBackground,
                    },
                    headerTintColor: theme.title,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>

                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact' }} />
            </Stack>
        </UserProvider>
    );
}

export default RootLayout

const styles = StyleSheet.create({})