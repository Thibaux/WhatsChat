import React, { ChangeEvent } from 'react';
import { FormControl, Input } from '@chakra-ui/react';

interface TextInputProps {
    placeholder: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isDisabled: boolean;
}

export const MessageInput = ({
    placeholder,
    value,
    handleChange,
    isDisabled,
}: TextInputProps) => (
    <FormControl>
        <Input
            _placeholder={{ opacity: 1, color: 'gray.600' }}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            disabled={isDisabled}
            variant='unstyled'
            minH='100%'
        />
    </FormControl>
);
