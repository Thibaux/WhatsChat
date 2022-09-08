import React, { ChangeEvent } from 'react';
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react';

interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    hasError: boolean;
}

export const TextInput = ({
    label,
    placeholder,
    value,
    handleChange,
    hasError,
}: TextInputProps) => (
    <FormControl isInvalid={hasError}>
        <FormLabel pb='2' fontWeight='semibold'>
            {label}
        </FormLabel>
        <Input
            variant='flushed'
            _placeholder={{ opacity: 1, color: 'gray.600' }}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
        {hasError && <FormErrorMessage>{label} is required.</FormErrorMessage>}
    </FormControl>
);
