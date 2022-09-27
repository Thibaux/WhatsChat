import { backendApiInstance } from '../utils/apiInstance';

export const getMessagesOfChat = async (chatId: string) => {
    try {
        const result = await backendApiInstance().get(`/messages/${chatId}`);
        return result.data;
    } catch (e) {
        return e;
    }
};

export const sendMessageToApi = async (message: string, chatId: string) => {
    try {
        const result = await backendApiInstance().post(`/messages`, {
            chatId,
            content: message,
        });
        return result.data;
    } catch (e) {
        return e;
    }
};
