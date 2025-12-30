import { useUser } from '../../hooks/useUser';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

export function GuestOnly({ children }) {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/profile');
        }
    }, [authChecked, user]);

    if (!authChecked || user) {
        return (
            <Text>Loading...</Text>
        )
    }

    return children
}