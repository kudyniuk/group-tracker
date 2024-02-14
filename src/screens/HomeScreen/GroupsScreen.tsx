import { Layout, Text } from "@ui-kitten/components"
import { GroupCard } from "../../components"
import { useUsers } from "../../firestore"

export const GroupsScreen = () => {
    const { data } = useUsers()

    return <Layout style={{ flex: 1, padding: 12, gap: 8 }}>
        <GroupCard />
        <GroupCard />
        <GroupCard />

        <Text>{JSON.stringify(data)} </Text>
    </Layout>
} 