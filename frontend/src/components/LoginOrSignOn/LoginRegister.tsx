import React from 'react';
import {
    Box,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import styles from './loginRegister.module.scss';
import { LoginForm, RegisterForm } from './subComponents';

export const LoginRegister = () => {
    return (
        <Box borderRadius='lg' className={styles.loginRegisterWrapper}>
            <div className={styles.headingWrapper}>
                <Heading>Chat App</Heading>
            </div>
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
        </Box>
    );
};
