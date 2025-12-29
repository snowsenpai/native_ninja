import { createContext, useState } from 'react';
import { account } from '../lib/appwrite';
import { ID } from 'react-native-appwrite';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        try {
            const session = await account.createEmailPasswordSession({ email, password });
            setUser(session);
        } catch (error) {
            console.log('Login context error:', error.message);
        }
    }

    async function register(email, password) {
        try {
            const user = await account.create({ userId: ID.unique(), email, password });
            setUser(user);
        } catch (error) {
            console.log('Register context error:', error.message);
        }
    }

    async function logout() {
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
}