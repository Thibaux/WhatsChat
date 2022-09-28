import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';

interface GenericErrorInterface {
    title: string;
    description: string | undefined;
}

export const GenericError = ({ title, description }: GenericErrorInterface) => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
};
