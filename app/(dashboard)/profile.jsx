import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
    const { logout, user } = useUser();

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                {user.email ? user.email : user.providerUid}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />

            <ThemedButton onPress={logout} style={{ padding: 10, backgroundColor: 'red', borderRadius: 6 }}>
                <ThemedText>Logout</ThemedText>
            </ThemedButton>

        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})