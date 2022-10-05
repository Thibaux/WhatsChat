import React, { ChangeEvent, RefObject } from 'react';
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
    hasError?: boolean | undefined;
    innerRef?: RefObject<HTMLInputElement>;
}

export const TextInput = ({
    label,
    placeholder,
    value,
    handleChange,
    hasError,
    innerRef,
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
            ref={innerRef}
        />
        {hasError && <FormErrorMessage>{label} is required.</FormErrorMessage>}
    </FormControl>
);
