import { useEffect, useState } from "react"
import firestore from "@react-native-firebase/firestore"

export const createCollectionSubscription = <Result,>(collection: string) => () => {
    const [data, setData] = useState<Result | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const subscriber = firestore().collection(collection).onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())
            setData(data as Result)
            setIsLoading(false)
        }, error => {
            setError(error)
        })

        return () => subscriber()
    }, [])

    return {
        data,
        error,
        isLoading
    }
}