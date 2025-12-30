import { ActivityIndicator, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import ThemedView from './ThemedView';

export const ThemedLoader = ({ size = 'large', ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={size} color={theme.text} {...props} />
        </ThemedView>
    );
}