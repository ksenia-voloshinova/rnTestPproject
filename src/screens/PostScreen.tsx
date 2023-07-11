import {PostList} from "../components/PostList";
import { DATA } from '../data'
import React from "react";
import * as Keychain from 'react-native-keychain';
import {useNavigation} from "@react-navigation/native";
import LogoTitle from "../components/Header";
import {useSelector} from "react-redux";


export const PostScreen: React.FC = () => {
    // useSelector(state => console.log(state));
    // const navigation = useNavigation();
    //
    // navigation.setOptions({
    //     headerTitle: LogoTitle,
    // });
    //
    // const data =  Keychain.getGenericPassword();
    // console.log(data);

    return <PostList data ={ DATA }/>;
};