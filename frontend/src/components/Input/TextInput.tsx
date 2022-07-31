import React, { ChangeEvent } from 'react';
import { Input, Text } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

export const TextInput = ({
    label,
    placeholder,
    value,
    handleChange,
    hasError,
}: {
    label: string;
    placeholder: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    hasError: boolean;
}) => (
    <>
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
            {hasError && (
                <FormErrorMessage>{label} is required.</FormErrorMessage>
            )}
        </FormControl>
    </>
);
