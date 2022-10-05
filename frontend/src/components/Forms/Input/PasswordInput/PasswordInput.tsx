import React, { ChangeEvent, useState } from 'react';
import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';

interface PasswordInputProps {
    value: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    hasError: boolean;
}

export const PasswordInput = ({
    value,
    handleChange,
    hasError,
}: PasswordInputProps) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl isInvalid={hasError}>
            <Text pb='2' fontWeight='semibold'>
                Password
            </Text>
            <InputGroup size='md'>
                <Input
                    variant='flushed'
                    pr='4.5rem'
                    _placeholder={{ opacity: 1, color: 'gray.600' }}
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={value}
                    onChange={handleChange}
                />

                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {hasError && (
                <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
        </FormControl>
    );
};
