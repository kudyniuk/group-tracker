import { Layout, Text } from "@ui-kitten/components"
import MapView, { Marker, Polyline, UrlTile } from 'react-native-maps'
import { StyleSheet, Image, View } from 'react-native'
import { AvatarMarker } from "../../components"
import { useUsers } from "../../firestore"
import { Fragment } from "react"

const customTileUrl = 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png'

export const MapScreen = () => {
    const { data } = useUsers()

    return <Layout style={styles.container}>
        {data?.length ? <MapView style={styles.map} initialRegion={{
            latitude: 53.91053,
            longitude: 14.24712,
            latitudeDelta: 1.0922,
            longitudeDelta: 0.0421,
        }} >
            <UrlTile urlTemplate={customTileUrl} />
            {data?.map((user) => {
                const lastPosition = user.positions[0].position
                const positions = user.positions.map(pos => ({
                    latitude: pos.position.latitude + 0.001,
                    longitude: pos.position.longitude + 0.001
                }))

                return <Fragment key={user.name}>
                    <Marker
                        coordinate={{ latitude: lastPosition.latitude, longitude: lastPosition.longitude }}
                    >
                        <AvatarMarker text={user.name + JSON.stringify(positions)} />
                    </Marker>
                    <Polyline coordinates={positions} strokeWidth={5} />
                </Fragment>

            })}
        </MapView> : null}
    </Layout>
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});

