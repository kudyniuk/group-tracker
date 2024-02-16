import { Layout, Text } from "@ui-kitten/components"

import { RootScreen } from "@own/routing"

export const GroupScreen: RootScreen.Group = ({ route }) => {
	const { group } = route.params

	return <Layout style={{ flex: 1 }}>
		<Text>Group: {group.name}</Text>
	</Layout>
}
