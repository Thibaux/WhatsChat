export const objectHasSomeTrueValues = (object: {
    [key: string]: string | boolean | null;
}): boolean => Object.values(object).some((value) => value);
