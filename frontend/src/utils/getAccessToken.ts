export const getAccessToken = (): string => {
    let token = '';

    const state = localStorage.getItem('userObject');

    if (state) {
        const retrievedObject = JSON.parse(state);
        token = retrievedObject.state.userObject.token;
    }

    return token;
};
