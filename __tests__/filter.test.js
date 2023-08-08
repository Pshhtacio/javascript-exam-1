import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here
    test('demo should return true', () => {
    //    given
    const numbers = [2, 3, 4];
    //    when
    const result = filterEvenNumbers(numbers);
    //    then
    expect(result).toBe[2, 4];
    });
});