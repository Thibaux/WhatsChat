import { backendApiInstance } from '../../utils/apiInstance';

export const getMessagesOfChat = async (chatId: string) => {
    try {
        const result = await backendApiInstance().get(`/messages/${chatId}`);
        return result.data;
    } catch (e) {
        return e;
    }
};
