import { useState } from "react"
import { StyleSheet, View } from "react-native"

import { Button, Card, Icon, Text } from "@ui-kitten/components"

import { useAppNavigation } from "@own/routing"
import { Group } from "@own/types"

type Props = {
	group: Group
}

export const GroupCard: React.FC<Props> = ({ group }) => {
    const [active, setActive] = useState(false)
    const { navigate } = useAppNavigation()

    const Footer = () => {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="star" style={styles.icon} />
                    <Text appearance="hint">2/6</Text>
                </View>
                <Button size="small" status={active ? "danger" : "primary"} style={styles.button} onPress={() => setActive(!active)}>
                    {active ? "Stop Tracking" : "Track"}
                </Button>
                <Button size="small" status="warning" onPress={() => navigate("Group", { group })}>
					Settings
                </Button>
            </View>
        )
    }

    return (
        <Card status={active ? "info" : "basic"} style={styles.container} footer={Footer}>
            <Text category="h6">{group.name}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {},
    button: {},
    footerContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 6,
        paddingHorizontal: 12,
        gap: 8,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginRight: "auto",
    },
    icon: {
        width: 16,
        height: 16,
    },
})
