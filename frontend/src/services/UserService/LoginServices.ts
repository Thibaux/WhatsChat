import { backendApiInstance } from '../../utils/apiInstance';

export const postLoginDetails = async (loginValues: LoginValues) => {
    try {
        const result = await backendApiInstance().post(
            '/users/login',
            loginValues
        );

        if (result.status === 200) {
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
