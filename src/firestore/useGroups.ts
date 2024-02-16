import { createCollectionSubscription } from "./utils"

type Group = {
    name: string
}

export const useGroups = createCollectionSubscription<Group[]>("groups")
