import { Button, Icon, Layout, Text } from "@ui-kitten/components"
import { GroupCard } from "@own/components"
import { AcessoryComponent } from "@own/types";
import { StyleSheet, View } from "react-native";
import { useGroups } from "@own/firestore/useGroups";
import { HomeScreen, useAppNavigation } from "@own/routing";

const GoogleIcon: AcessoryComponent = (props) => (
    <Icon name='plus' {...props} />
);

export const GroupsScreen: HomeScreen.Groups = () => {
    const { navigate } = useAppNavigation()
    const { data } = useGroups()

    return <Layout style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 12, gap: 8 }}>
            {data ? data.map(group => {
                return (
                    <GroupCard key={group.name} group={group} />
                );
            }) : <Text>Create or join first group</Text>}
        </View>
        <View style={{ display: "flex", alignItems: "flex-end", padding: 32 }}>
            <Button onPress={() => navigate('CreateGroup')} style={styles.button} accessoryRight={GoogleIcon} />
        </View>
    </Layout>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: 45,
        height: 45,
    }
})