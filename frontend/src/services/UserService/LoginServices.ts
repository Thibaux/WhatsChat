import { backendApiInstance } from '../../utils/apiInstance';

export const postLoginDetails = async (loginValues: LoginValues) => {
    try {
        const result = await backendApiInstance().post(
            '/users/login',
            loginValues
        );
        return result.data;
    } catch (e) {
        console.log(e);
        return e;
    }
};
