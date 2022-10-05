export const getAccessToken = (): string => {
    const state = localStorage.getItem('userStore');

    if (!state) {
        return '';
    }

    const retrievedObject = JSON.parse(state);
    return retrievedObject.state.userObject.token;
};
