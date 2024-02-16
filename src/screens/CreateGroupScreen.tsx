import { useState } from "react"

import { Button, Input, Layout, Text } from "@ui-kitten/components"

import { createGroup } from "@own/firestore"
import { RootScreen, useAppNavigation } from "@own/routing"

export const CreateGroupScreen: RootScreen.CreateGroup = () => {
	const [name, setName] = useState("")
	const [error, setError] = useState("")
	const { navigate } = useAppNavigation()

	const handleSave = () => {
		createGroup(name).then(() => {
			navigate("Home", { screen: "Groups" })
		}).catch(e => {
			setError(e.message)
		})
	}

	return <Layout style={{ flex: 1, padding: 12, gap: 8 }}>
		<Input onChangeText={setName} label="Group name" placeholder='A very nice group' />
		{error ? <Text>{error}</Text> : null}
		<Button onPress={handleSave}>Create</Button>
	</Layout>
}