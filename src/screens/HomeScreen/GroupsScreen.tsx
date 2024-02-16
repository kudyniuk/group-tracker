import { Button, Icon, Layout, Text } from "@ui-kitten/components"
import { GroupCard } from "../../components"
import { AcessoryComponent } from "@own/types";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGroups } from "@own/firestore/useGroups";

const GoogleIcon: AcessoryComponent = (props) => (
    <Icon name='plus' {...props} />
);

export const GroupsScreen = () => {
    const { navigate } = useNavigation() as any
    const { data } = useGroups()

    return <Layout style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 12, gap: 8 }}>
            {data ? data.map(group => (
                <GroupCard key={group.name} name={group.name} />
            )) : <Text>Create or join first group</Text>}
        </View>
        <View style={{ display: "flex", alignItems: "flex-end", padding: 32 }}>
            <Button onPress={() => navigate('Create')} style={styles.button} accessoryRight={GoogleIcon} />
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