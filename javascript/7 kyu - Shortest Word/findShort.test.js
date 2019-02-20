import findShort from "./findShort";

describe('bad inputs', function () {
    it("null", function () {
        expect(findShort()).toEqual(null);
    });
});

describe('finding lowest string', function () {
    it("2 values", function () {
        expect(findShort('ahoj sv')).toEqual(2);
    });

    it("3 values", function () {
        expect(findShort('ahoj sv aaaa')).toEqual(2);
    });
});

describe('codewars sample tests', function () {
    it("first test", function () {
        expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3);
    });
    it("second test", function () {
        expect(findShort("turns out random test cases are easier than writing out basic ones")).toEqual(3);
    });
});

