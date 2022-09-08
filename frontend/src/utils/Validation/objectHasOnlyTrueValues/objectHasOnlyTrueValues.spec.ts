import { objectHasSomeTrueValues } from './objectHasOnlyTrueValues';

describe('objectHasOnlyTrueValues', () => {
    it('should return true if all the keys of an given object have an true value', () => {
        const dataProvider = [
            {
                inputData: {
                    value1: true,
                    value2: true,
                },
                expectedResult: true,
            },
            {
                inputData: {
                    value1: true,
                    value2: false,
                },
                expectedResult: true,
            },
            {
                inputData: {
                    value1: false,
                    value2: false,
                },
                expectedResult: false,
            },
        ];

        dataProvider.forEach((testCase) => {
            const result = objectHasSomeTrueValues(testCase.inputData);
            expect(result).toBe(testCase.expectedResult);
        });
    });
});
