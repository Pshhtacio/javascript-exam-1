import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
    test('should return the first age equal or greater than 18 when filterEvenNumbers is applied', () => {
        const ages = [0, 17, 18, 19, 20];
        const result = firstGrownUp(ages);
        expect(result).toBe(18);

        const ages2 = [0, 10, 20, 30, 40];
        const result2 = firstGrownUp(ages2);
        expect(result2).toBe(20);
    });

    test('should return none when filterEvenNumbers is applied', () => {
        const ages = [0, 2, 7, 12, 17];
        const result = firstGrownUp(ages);
        expect(result).toBe();
    });
    test('should return the first orange with case sensitivity in consideration when firstOrange is applied', () => {
        const fruits = ['Orange', 'tangerine', 'orange', 'mandarin'];
        const result = firstOrange(fruits);
        expect(result).toBe('orange'); //orange with a lowercase 'o'
    });

    test('should return none when firstOrange is applied', () => {
        const fruits = ['Tangerine', 'Mandarin', 'Clementine', 'Orange'];//Should be orange with a lowercase 'o'
        const result = firstOrange(fruits);
        expect(result).toBe();
    });
    test('should return the first name with a length over 5 characters when firstLengthOver5Name is applied', () => {
        const names = ['Zoe', 'Chris', 'Dave', 'Bradley', 'McArthur'];
        const result = firstLengthOver5Name(names);
        expect(result).toBe('Bradley');
    });

    test('should return none when firstLengthOver5Name is applied', () => {
        const names = ['Zoe', 'Chris', 'Dave', 'Vin', 'Karen'];
        const result = firstLengthOver5Name(names);
        expect(result).toBe();
    });

    test('should throw an error when invalid input is provided', () => {
        const invalidInputs = null;
        expect(() => {
            firstGrownUp(invalidInput);
            firstOrange(invalidInput);
            firstLengthOver5Name(invalidInput);
        }).toThrow();
    });
});
