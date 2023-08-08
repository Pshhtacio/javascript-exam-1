import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('should return an array containing only even numbers [2, 4] when filterEvenNumbers is applied', () => {
        const numbers = [1, 2, 3, 4];
        const result = filterEvenNumbers(numbers);
        expect(result).toBe[2, 4];
    });

    test('should return an empty array when filterEvenNumbers is applied', () => {
        const numbers = [1, 3, 5, 7];
        const result = filterEvenNumbers(numbers);
        const emptyArray = [];
        expect(result).toEqual(emptyArray);
    });

    test('should return an array containing only words with the length of 4 when filterLengthWith4 is applied', () => {
        const words = ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'];
        const result = filterLengthWith4(words);
        expect(result).toBe['Beta', 'Echo'];
    });

    test('should return an empty array when filterLengthWith4 is applied', () => {
        const words = ['Apple', 'Banana', 'Cat', 'Dog', 'Egg'];
        const result = filterLengthWith4(words);
        const emptyArray = [];
        expect(result).toEqual(emptyArray);
    });

    test('should return an array containing only words that starts with the letter a when filterStartWithA is applied', () => {
        const words = ['Alpha', 'ant', 'Beta', 'boy', 'Carcasses'];
        const result = filterLengthWith4(words);
        expect(result).toBe['Alpha', 'ant'];
    });

    test('should return an empty array when filterStartWithA is applied', () => {
        const words = ['Banana', 'Cat', 'Dog', 'Egg'];
        const result = filterLengthWith4(words);
        const emptyArray = [];
        expect(result).toEqual(emptyArray);
    });

    test('should throw an error when invalid input is provided', () => {
        const invalidInputs = null;
         expect(() => {
         filterEvenNumbers(invalidInput);
         filterLengthWith4(invalidInput);
         filterStartWithA(invalidInput);
         }).toThrow();
    });
});