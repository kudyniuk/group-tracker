import { Card, Text } from "@ui-kitten/components"

type Props = {
    name: string
}

export const GroupCard: React.FC<Props> = ({ name }) => {
    return <Card status="primary">
        <Text>{name}</Text>
    </Card>
}