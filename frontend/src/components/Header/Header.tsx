import React from 'react';
import { Heading } from '@chakra-ui/react';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <div className={styles.headingWrapper}>
            <Heading>Chat App</Heading>
        </div>
    );
};
