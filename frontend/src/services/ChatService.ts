import { backendApiInstance } from '../utils/apiInstance';

export const getChats = async () => {
    try {
        const result = await backendApiInstance().get('/chat');
        return result.data;
    } catch (e) {
        console.log(e);
        return e;
    }
};

export const createChat = async ({
    userId,
    chatTitle,
}: {
    userId: string;
    chatTitle: string;
}): Promise<ApiResponseType> => {
    try {
        const result = await backendApiInstance().post('/chat', {
            userId,
            chatTitle,
        });

        if (result.status === 201) {
            return {
                status: 'SUCCESS',
                data: result.data.chat,
            };
        }
        if (result.status === 400) {
            return {
                status: 'FAILED',
                data: result,
            };
        }
        return {
            status: 'FAILED',
            data: result.data,
        };
    } catch (e) {
        return {
            status: 'FAILED',
            data: e,
        };
    }
};

export const deleteChat = async (chatId: string): Promise<ApiResponseType> => {
    try {
        const result = await backendApiInstance().delete(`/chat/${chatId}`);

        if (result.status === 204) {
            return {
                status: 'SUCCESS',
                data: result.data,
            };
        }
        return {
            status: 'FAILED',
            data: result.data,
        };
    } catch (e) {
        return {
            status: 'FAILED',
            data: e,
        };
    }
};
