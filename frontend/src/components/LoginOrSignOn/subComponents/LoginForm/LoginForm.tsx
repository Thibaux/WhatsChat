import React, { useState } from 'react';
import {
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './loginForm.module.scss';

export const LoginForm = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div className={styles.loginFormWrapper}>
            <div className={styles.loginFormWrapper__email}>
                <Text pb='2' fontWeight='semibold'>
                    E-mail address
                </Text>
                <Input variant='flushed' placeholder='john.doe@hotmail.com' />
            </div>

            <div>
                <Text pb='2' fontWeight='semibold'>
                    Password
                </Text>
                <InputGroup size='md'>
                    <Input
                        variant='flushed'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </div>

            <Button
                variant='outline'
                bg='blue.600'
                size='lg'
                rightIcon={<ArrowForwardIcon />}
            >
                Button
            </Button>
        </div>
    );
};
