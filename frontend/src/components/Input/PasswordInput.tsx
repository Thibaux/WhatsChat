import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';

interface PasswordInputProps {
    value: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({ value, handleChange }: PasswordInputProps) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <>
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
        </>
    );
};
