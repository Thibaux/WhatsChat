import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface SubmitButtonProps {
    buttonText: string;
    onSubmit?: (e: any) => void;
}

export const SubmitButton = ({ buttonText, onSubmit }: SubmitButtonProps) => (
    <Button
        variant='outline'
        bg='blue.500'
        size='lg'
        rightIcon={<ArrowForwardIcon />}
        onClick={onSubmit}
    >
        {buttonText}
    </Button>
);
