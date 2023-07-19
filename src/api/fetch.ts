import { api } from "./api";
export const  fetchUserData = async (username: string, password: string): Promise<any> => {
    const userData = await api.post('/auth/sign_in', { email: username, password });

    api.addRequestTransform((request) => {
        request.headers['access-token'] = userData.headers['access-token'];
        request.headers['uid'] = userData.headers.uid;
        request.headers['client'] = userData.headers.client;
    });

    return userData
}
export const fetchPosts = async (): Promise<any> => {
    return await api.get('/news', {});
};
export const fetchPostId = async (newsid:string): Promise<any> => {
    return await api.get(`/news/${newsid}`);
}
