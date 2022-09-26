import React from 'react';
import Select, { SingleValue } from 'react-select';

interface SearchUserInterface  {
    users: SearchListInput[],
    handleChange: (u: SingleValue<SearchListInput>) => void,
}

export const SearchUser = ({ users, handleChange }: SearchUserInterface) => {
    return <Select onChange={handleChange} options={users} />;
};
