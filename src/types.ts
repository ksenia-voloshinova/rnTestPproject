import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type GeneralData = {
    data: UserType;
    headers: HeaderData;
}

export type UserDataTypes = {
    userData: StorageData;
    isFlexUpdated: boolean
}

export type UserType = {
    user: {
        username: string,
        avatar_cropped_big_url: string,
        email: string,
    };

}

type HeaderData = {
    "access-token": string,
    client: string,
    uid: string,
}

export type StorageData =  {
    accessToken: string ;
    client: string ;
    uid: string ;
    isLogin: string | null;
    username: string | null;
    avatar: string | undefined;
    login: string | null;
    password: string | null;
}
export type SearchBarProps = {
    onSearch: (query: string) => void;
}

export type NewProps = {
    news: NewsData;
}

export type NewsProps = {
    news: NewsData[];
}

export type NewsData = {
    id: string;
    title: string;
    image_url: string;
    image_additional_url: string;
    body: string;
    short_text: string;
    created_at: string;
    category: string;
    icon: string;
    model_name: string;
    table_name: string;
}

export type RootStackParamList = {
    AuthScreen: {};
    NewsScreen: {};
    NewsDetailedScreen: {};
};

export type AuthScreenNavigationType = NativeStackNavigationProp<RootStackParamList, 'AuthScreen'>;

export type NewsScreenNavigationType = NativeStackNavigationProp<RootStackParamList, 'NewsScreen'>

export type NewsDetailedScreenNavigationType = NativeStackNavigationProp<RootStackParamList, 'NewsDetailedScreen'>

export type RootState = {
    news: NewsState;
    logout: UserState;
}
export type NewsState = {
    news: NewsData[] | [],
    filteredNews:NewsData[] | [],
    newsItem: NewsData ;
}
export type UserState = {
    userDetails: StorageData ;
    isLogin: boolean;
};

