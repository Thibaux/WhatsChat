import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';

export const SuccessfulRegisterAlert = () => {
    return (
        <Alert status='success'>
            <AlertIcon />
            <AlertTitle>You have created your account!</AlertTitle>
            <AlertDescription>Log in to get chatting </AlertDescription>
        </Alert>
    );
};
