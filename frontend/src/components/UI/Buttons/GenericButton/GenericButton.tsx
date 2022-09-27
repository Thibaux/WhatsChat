import * as React from 'react';
import { JSXElementConstructor, ReactElement } from 'react';
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface GenericButtonInterface {
    title: string;
    handleClick: () => void;
    color: string;
    icon: ReactElement<any, string | JSXElementConstructor<any>>;
}

export const GenericButton = ({
    title,
    color,
    handleClick,
    icon,
}: GenericButtonInterface) => {
    return (
        <Button colorScheme={color} onClick={handleClick} rightIcon={icon}>
            {title}
        </Button>
    );
};

DeleteIcon;
