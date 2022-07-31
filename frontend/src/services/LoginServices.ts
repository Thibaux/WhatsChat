import { backendApiInstance } from '../utils/apiInstance';

export const postLoginDetails = (loginValues: LoginValues) => {
    try {
        console.log(loginValues);
        const result = backendApiInstance().post('', loginValues);
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
        return e;
    }
};
