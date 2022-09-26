import { useState } from 'react';

export const useLoginRegister = () => {
    const [isLoginSelected, setIsLoginSelected] = useState(true);

    const handleSwitch = () => {
        isLoginSelected ? setIsLoginSelected(false) : setIsLoginSelected(true);
    };

    return {
        isLoginSelected,
        handleSwitch,
    };
};
