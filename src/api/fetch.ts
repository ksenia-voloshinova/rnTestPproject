import { api } from "./api";

export const  fetchUserData = async (username: string, password: string): Promise<any> => {
    return await api.post('/auth/sign_in', { email: username, password });
}

export const fetchPosts = async ( accessToken:string, uid:string, client:string): Promise<any> => {
    const headers = {
        'access-token': accessToken,
        'uid': uid,
        'client': client,
    };

    return await api.get('/news', null,{ headers });
};
