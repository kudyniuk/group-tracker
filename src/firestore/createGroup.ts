import firestore from "@react-native-firebase/firestore"


export const createGroup = (groupName: string) =>
	firestore().collection("groups").add({
		name: groupName
	})

