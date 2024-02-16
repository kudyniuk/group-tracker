import { createGroup } from '@own/firestore'
import { useNavigation } from '@react-navigation/native'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useState } from 'react'

export const CreateGroupScreen = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState("")
    const { navigate } = useNavigation() as any

    const handleSave = () => {
        createGroup(name).then(() => {
            navigate('Home')
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