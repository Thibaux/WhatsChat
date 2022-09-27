import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import styles from './loginRegister.module.scss';
import { LoginForm, RegisterForm } from './subComponents';
import { Header } from '../Header/Header';
import { GenericError } from '../UI/Errors';
import { useLoginRegisterStore } from '../../store/LoginStore';
import { SuccessfulRegisterAlert } from '../UI/Alerts';

export const LoginRegister = () => {
    const {
        showFailedLoginError,
        showFailedRegisterError,
        successfulRegister,
    } = useLoginRegisterStore();

    return (
        <Box borderRadius='lg' className={styles.loginRegisterWrapper}>
            <Header />
            <Tabs isFitted variant='enclosed' bg='#f5f5f5'>
                <TabList>
                    <Tab
                        _selected={{ bg: 'blue.300' }}
                        fontSize='lg'
                        fontWeight='semibold'
                    >
                        Login
                    </Tab>
                    <Tab
                        _selected={{ bg: 'blue.300' }}
                        fontSize='lg'
                        fontWeight='semibold'
                    >
                        Register
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <LoginForm />
                    </TabPanel>
                    <TabPanel>
                        <RegisterForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>

            {showFailedLoginError && (
                <GenericError
                    title='Username/password are incorrect!'
                    description='Please try again.'
                />
            )}
            {showFailedRegisterError && (
                <GenericError
                    title='Email is already taken!'
                    description='Please try another'
                />
            )}
            {successfulRegister && <SuccessfulRegisterAlert />}
        </Box>
    );
};
