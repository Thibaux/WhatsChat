export const convertDateTime = (inputDateTime: string): string => {
    const d = new Date(inputDateTime);

    const date = d.toDateString();
    const time = d.toLocaleTimeString();

    return `${time} ${date}`;
};
