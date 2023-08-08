import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
    test('should return an array containing values half of the given numbers when halfNumbers is applied', () => {
        const numbers = [1, 2, 3];
        const result = halfNumbers(numbers);
        expect(result).toBe[.5, 1, 1.5];
    })

    test('should return an empty array when halfNumbers is applied on empty array', () => {
        const numbers = [];
        const result = halfNumbers(numbers);
        const emptyArray = [];
        expect(result).toEqual(emptyArray);
    })

    test('should return an array containing greetings of the given names when spliceNames is applied', () => {
        const names = ['Zoe', 'Chris', 'Dave', 'Bradley', 'McArthur'];
        const result = spliceNames(names);
        expect(result).toBe['Hello Zoe', 'Hello Chris', 'Hello Dave', 'Hello Bradley', 'Hello McArthur'];
    })

    test('should still return an array when spliceNames is applied with an empty string', () => {
        const names = [''];
        const result = spliceNames(names);
        expect(result).toBe['Hello '];
    })

    test('should return an array containing fruit names with serial numbers when addSerialNumber is applied', () => {
        const fruits = ['Strawberry', 'Eggplant', 'Xigua'];
        const result = addSerialNumber(fruits);
        expect(result).toBe['1. Strawberry', '2. Eggplant', '3. Xigua'];
    })

    test('should still return an array when addSerialNumber is applied with an empty string', () => {
        const fruits = [''];
        const result = addSerialNumber(fruits);
        expect(result).toBe['1. '];
    })

    test('should throw an error when invalid input is provided', () => {
          const invalidInput = null;
          expect(() => {
              addSerialNumber(invalidInput);
              halfNumbers(invalidInput);
              spliceNames(invalidInput);
          }).toThrow();
      });
});
