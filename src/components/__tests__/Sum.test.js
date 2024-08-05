import { Sum } from "../Sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = Sum(3, 4);
    // Below line is known as 'Assertion'
    expect(result).toBe(7);
});
