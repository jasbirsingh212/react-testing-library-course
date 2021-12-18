import { sumPositiveNumbers } from './example';


describe("testing sumPositiveNumbers funtion", () => {

    test("check for valid input", () => {
        expect(sumPositiveNumbers(0,1)).toBe(1);
        expect(sumPositiveNumbers(0,1)).not.toBe(2)

    })

    test('check for invalid input', () => {
        expect(() => sumPositiveNumbers(0, -1)).toThrow('both number must be positive') 
        expect(() => sumPositiveNumbers(-1, -1)).toThrow('both number must be positive')
        expect(() => sumPositiveNumbers(-1, 0)).toThrow('both number must be positive')   
    })


})