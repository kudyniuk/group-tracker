import { Fragment } from "react"
import { StyleSheet } from "react-native"
import MapView, { Marker, Polyline, UrlTile, WMSTile } from "react-native-maps"

import { Layout } from "@ui-kitten/components"

import { AvatarMarker } from "@own/components"
import { useUsers } from "@own/firestore"
import { HomeScreen } from "@own/routing"



const TILES_OPEN_SEA_MAP = "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
const WMS_DEPTH = "https://ows.emodnet-bathymetry.eu/wms?service=WMS&service=WMS&request=GetMap&version=1.3.0&layers=emodnet:mean_multicolour&styles=&format=image/png&transparent=true&info_format=text/html&tiled=false&width={width}&height={height}&srs=EPSG:3857&bbox={minX},{minY},{maxX},{maxY}"

export const MapScreen: HomeScreen.Map = () => {
	const { data } = useUsers()

	return <Layout style={styles.container}>
		{data?.length ? <MapView style={styles.map} initialRegion={{
			latitude: 53.91053,
			longitude: 14.24712,
			latitudeDelta: 1.0922,
			longitudeDelta: 0.0421,
		}} >
			{false && <WMSTile urlTemplate={WMS_DEPTH} maximumNativeZ={15} maximumZ={18} opacity={1} />}
			<UrlTile urlTemplate={TILES_OPEN_SEA_MAP} maximumZ={18} maximumNativeZ={15} />

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
		justifyContent: "flex-end",
		alignItems: "center",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},

})

