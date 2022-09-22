import { backendApiInstance } from '../../utils/apiInstance';

export const getChats = async () => {
    try {
        const result = await backendApiInstance().get('/chat');
        return result.data;
    } catch (e) {
        console.log(e);
        return e;
    }
};
