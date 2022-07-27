import React, { useState } from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorModeValue,
} from '@chakra-ui/react';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

interface LoginOrSignOnSliderProps {
    // handleSwitch: () => void;
}

export const LoginRegisterContainer = () => {
    return (
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
    );
};
