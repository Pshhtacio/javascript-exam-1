import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('should return an array containing only even numbers [2, 4] when filterEvenNumbers is applied', () => {
        const numbers = [1, 2, 3, 4];
        const result = filterEvenNumbers(numbers);
        expect(result).toBe[2, 4];
    });

    test('should return an empty array when filterEvenNumbers is applied', () => {
        const numbers = [1, 3, 5];
        const result = filterEvenNumbers(numbers);
        const emptyArray = [];
        expect(result).toEqual(emptyArray);
    });
});