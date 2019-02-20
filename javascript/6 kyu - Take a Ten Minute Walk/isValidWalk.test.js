import isValidWalk from "./isValidWalk";

describe('walk test', function () {
    it("should false if nothing is not array", function () {
        expect(isValidWalk()).toEqual(false);
    });

    it("should return false if length of steps are not equal ten", function () {
        expect(isValidWalk(['n', 's'])).toEqual(false);
    });

    it("should return true on valid walk", function () {
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toEqual(true);
    });

    it("should return false on wrong walk", function () {
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toEqual(false);
    });
});

