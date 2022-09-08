import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface SubmitButtonProps {
    buttonText: string;
    handleSubmit: () => void;
}

export const SubmitButton = ({
    buttonText,
    handleSubmit,
}: SubmitButtonProps) => (
    <Button
        variant='outline'
        bg='blue.500'
        size='lg'
        rightIcon={<ArrowForwardIcon />}
        onClick={handleSubmit}
    >
        {buttonText}
    </Button>
);
