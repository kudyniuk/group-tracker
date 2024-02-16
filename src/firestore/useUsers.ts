import { useEffect, useState } from "react"

import firestore from "@react-native-firebase/firestore"

import { User } from "@own/types"

type UseUsers = {
	data: User[] | null
	error: Error | null
}

export const useUsers = (): UseUsers => {
	const [users, setUsers] = useState<User[] | null>(null)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const getUsers = async () => {
			try {
				const users = await firestore().collection("user").get()
				const userWithPositions = (await Promise.all(
					users.docs.map(async (user) => {
						const positionsQuery = await firestore().collection("user").doc(user.id).collection("positions").get()
						const positions = positionsQuery.docs.map((doc) => doc.data())

						return {
							...user.data(),
							positions,
						}
					})
				)) as User[]

				setUsers(userWithPositions)
			} catch (error: unknown) {
				setError(error as Error)
			}
		}

		getUsers()
	}, [])

	return {
		data: users,
		error,
	}
}
