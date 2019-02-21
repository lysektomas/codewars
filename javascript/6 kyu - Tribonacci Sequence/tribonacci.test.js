import tribonacci from "./tribonacci";

describe('test', function () {
    it("zeros should return zero", function () {
        expect(tribonacci([0, 0, 0], 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    });

    it("should continuously add last three", function () {
        expect(tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
    });

    it("should return empty array when n is zero", function () {
        expect(tribonacci([1, 1, 1], 0)).toEqual([])
    });

    it("should return n length array", function () {
        expect(tribonacci([1, 1, 1], 1)).toEqual([1])
    });
});

