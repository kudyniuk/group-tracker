export type Position = {
	position: {
		latitude: number
		longitude: number
	}
	time: number
}

export type User = {
	positions: Position[]
	name: string
}
