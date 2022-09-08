import bcrypt from 'bcrypt';

export const matchPassword = async (
    usersPassword: string,
    enteredPassword: string
): Promise<boolean> => bcrypt.compare(enteredPassword, usersPassword);
