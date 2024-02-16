import { CompositeNavigationProp, NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamList, RootScreen, RootStackParamList } from "./RouterTypes";

type Navigation = NavigationProp<RootStackParamList>

export const useAppNavigation = useNavigation<Navigation>



