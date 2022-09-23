import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';

export const LoginError = () => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Username/password are incorrect!</AlertTitle>
            <AlertDescription>Please try again.</AlertDescription>
        </Alert>
    );
};
