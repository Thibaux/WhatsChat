import { backendApiInstance } from '../../utils/apiInstance';

export const postLoginDetails = async (loginValues: LoginValues) => {
    try {
        const result = await backendApiInstance().post('/users/login', {
            email: loginValues.emailValue,
            password: loginValues.passwordValue,
        });

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

export const postCreateUser = async (userValues: UserValues) => {
    try {
        const result = await backendApiInstance().post('/users/create', {
            username: userValues.usernameValue,
            email: userValues.emailValue,
            password: userValues.passwordValue,
        });

        if (result.status === 201) {
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

export const getUsers = async (searchValue?: string) => {
    try {
        const result = await backendApiInstance().get(`/users?search=`);

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
