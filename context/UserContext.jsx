import { createContext, useState } from 'react';
import { account } from '../lib/appwrite';
import { ID } from 'react-native-appwrite';
import { useRouter } from 'expo-router';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    async function login(email, password) {
        try {
            const session = await account.createEmailPasswordSession({ email, password });
            setUser(session);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function register(email, password) {
        try {
            const user = await account.create({ userId: ID.unique(), email, password });
            await login(email, password);
            setUser(user);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function logout() {
        try {
            await account.deleteSession({ sessionId: 'current' });
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}