import { NavigationProp, useNavigation } from "@react-navigation/native"

import { RootStackParamList } from "./RouterTypes"

type Navigation = NavigationProp<RootStackParamList>

export const useAppNavigation = useNavigation<Navigation>
