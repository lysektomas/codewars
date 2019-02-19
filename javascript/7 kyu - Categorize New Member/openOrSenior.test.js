import openOrSenior from "./openOrSenior";

describe('empty input', function () {
    it("should return empty array", function () {
        expect(openOrSenior()).toEqual([]);
        expect(openOrSenior(null)).toEqual([]);
    });
});

describe('returning exact values for array of length 1', function () {
    it("should return Open", function () {
        expect(openOrSenior([[10, 4]])).toEqual(['Open']);
    });

    it("should return Open #2", function () {
        expect(openOrSenior([[55, 4]])).toEqual(['Open']);
    });

    it("should return Senior", function () {
        expect(openOrSenior([[55, 8]])).toEqual(['Senior']);
    });
});

describe('returing values for length greater than one', function () {
    it("final test 1", function () {
        expect(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).toEqual(['Open', 'Senior', 'Open', 'Senior']);
    });

    it("final test 2", function () {
        expect(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])).toEqual(['Open', 'Open', 'Open', 'Open']);
    });

    it("final test 3", function () {
        expect(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])).toEqual(['Senior', 'Open', 'Open', 'Open']);
    });
});