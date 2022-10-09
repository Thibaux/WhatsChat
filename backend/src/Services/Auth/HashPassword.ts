import bcrypt from 'bcrypt';

export const hashPassword = async (password: string, saltRounds = 10): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);

        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
        return error;
    }
};
