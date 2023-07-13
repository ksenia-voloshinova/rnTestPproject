import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PostListProps = {
    data: PostData[];
};

export type PostData = {
    id: string;
    img: string;
    booked: boolean;
    text: string;
};

export type PostProps = {
    post: PostData;
};

export type UserState = {
    userDetails: StorageData | null;
};
export type NewsState = {
    news: StorageData | null;
};

export type GeneralData = {
    data: UserData;
    headers: HeaderData;
}

export type UserData = {
    user: UserType;
}

export type UserType = {
    id: number,
    username: string,
    avatar_url: string,
    avatar_cropped_big_url: string,
    email: string,
}

type HeaderData = {
    "access-token": string,
    client: string,
    uid: string,
}

export type StorageData =  {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    isLogin: string | null;
    username: string | null;
    avatar: string | null;
    login: string | null;
    password: string | null;
}

export type NewsListProps = {
    data: NewsData[];
};

export type NewsProps = {
    news: NewsData;
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
    // Здесь можно добавить другие экраны
};

export type AuthScreenNavigationType = NativeStackNavigationProp<RootStackParamList, 'AuthScreen'>;
