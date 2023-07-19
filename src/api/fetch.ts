import {api} from './api';
import {ApiResponse} from 'apisauce';
export const fetchUserData = async (
  username: string,
  password: string,
): Promise<ApiResponse<unknown, unknown>> => {
  const userData = await api.post('/auth/sign_in', {email: username, password});

  api.addRequestTransform(request => {
    request.headers['access-token'] = userData.headers['access-token'];
    request.headers['uid'] = userData.headers.uid;
    request.headers['client'] = userData.headers.client;
  });

  return userData;
};
export const fetchPosts = async (): Promise<ApiResponse<unknown, unknown>> => {
  return await api.get('/news', {});
};
export const fetchPostId = async (newsid: string): Promise<ApiResponse<unknown, unknown>> => {
  return await api.get(`/news/${newsid}`);
};
