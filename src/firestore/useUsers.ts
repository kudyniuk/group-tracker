import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { User } from '@own/types';


type UseUsers = {
    data: User[] | null,
    error: string | null
}

export const useUsers = (): UseUsers => {
    const [users, setUsers] = useState<User[] | null>(null)
    const [error, setError] = useState<any>(null)

    useEffect(() => {

        const getUsers = async () => {
            try {
                const users = await firestore().collection("user").get()
                const userWithPositions: any = await Promise.all(users.docs.map(async (user) => {
                    const positionsQuery = await firestore().collection('user').doc(user.id).collection('positions').get()
                    const positions = positionsQuery.docs.map(doc => doc.data())

                    return {
                        ...user.data(),
                        positions
                    }
                }))

                setUsers(userWithPositions)
            } catch (error: any) {
                setError("Catch" + error.message)
            }
        }

        getUsers()
    }, [])

    return {
        data: users,
        error
    }
}

