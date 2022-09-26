import React from 'react';
import Select from 'react-select';

export const SearchUser = ({ users }: { users: SearchListInput[] }) => {
    return <Select options={users} />;
};
