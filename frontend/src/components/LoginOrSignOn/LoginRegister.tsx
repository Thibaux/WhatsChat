import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import styles from './loginRegister.module.scss';
import { LoginRegisterContainer } from './subComponents';

export const LoginRegister = () => {
    return (
        <Box bg='#BEE3F8' h='auto' w='80%' p={8} borderRadius='lg'>
            <div className={styles.headingWrapper}>
                <Heading>Chat App</Heading>
            </div>
            <LoginRegisterContainer />
        </Box>
    );
};
