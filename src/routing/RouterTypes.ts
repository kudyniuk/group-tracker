import { Group } from "@own/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FC } from "react";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
    Groups: undefined;
    Map: undefined;
}

export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    CreateGroup: undefined;
    Group: { group: Group };
}

export namespace RootScreen {
    export type Home = FC<
        CompositeScreenProps<
            NativeStackScreenProps<RootStackParamList, "Home">,
            BottomTabScreenProps<HomeStackParamList>
        >>
    export type CreateGroup = FC<NativeStackScreenProps<RootStackParamList, "CreateGroup">>
    export type Group = FC<NativeStackScreenProps<RootStackParamList, "Group">>
}

export namespace HomeScreen {
    export type Groups = FC<BottomTabScreenProps<HomeStackParamList, "Groups">>
    export type Map = FC<BottomTabScreenProps<HomeStackParamList, "Map">>
}
