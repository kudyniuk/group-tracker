import { useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"

import { Avatar, Layout, Popover, Text } from "@ui-kitten/components"

type Props = {
    text: string
}

export const AvatarMarker: React.FC<Props> = ({ text }) => {
    const [visible, setVisible] = useState(false)

    const renderToggleButton = (): React.ReactElement => (
        <Pressable onPress={() => setVisible(true)}>
            <Avatar style={styles.avatar} size="small" source={{ uri: "https://placekitten.com/200/300" }} />
        </Pressable>
    )

    return (
        <View>
            <Popover visible={visible} anchor={renderToggleButton} onBackdropPress={() => setVisible(false)} placement={"top"}>
                <Layout style={styles.content}>
                    <Text>{text}</Text>
                </Layout>
            </Popover>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 2,
        borderColor: "brown",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
})
