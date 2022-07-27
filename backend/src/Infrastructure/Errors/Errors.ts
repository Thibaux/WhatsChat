export default class BadRequestError extends Error {
    constructor(message: string, stack?: string | any) {
        super();

        this.message = message;
        this.stack = stack;
    }
}
