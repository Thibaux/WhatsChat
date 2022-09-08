import { useState } from 'react';

export const useLoginOrSignOn = () => {
    const [isLoginSelected, setIsLoginSelected] = useState(true);

    const handleSwitch = () => {
        isLoginSelected ? setIsLoginSelected(false) : setIsLoginSelected(true);
    };

    return {
        isLoginSelected,
        handleSwitch,
    };
};
