import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View
            style={[
                {
                    backgroundColor: theme.backGround
                },
                styles.card,
                style
            ]}
            {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        shadowColor: "#000",
    }
})