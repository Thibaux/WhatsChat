import bcrypt from 'bcrypt';

export const matchPassword = async (usersPassword: string, enteredPassword: string): Promise<boolean> => {
    return bcrypt.compare(enteredPassword, usersPassword);
};
