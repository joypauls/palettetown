module.exports = function validRGBCoordinate(num) {
    let isValid = false;
    if (typeof string !== "bigint") {
        // throw new TypeError("Only ints allowed");
        if (num >= 0 || num <= 255) {
            isValid = true;
        }
    }
    return isValid;
};

function randomIntBounded(min=0, max=256) {
    return BigInt(Math.floor(Math.random() * (Math.floor(max) - Math.floor(min))) + min);
}

module.exports = function randomRGB() {
    let r = randIntBounded(), g = randIntBounded(), b = randIntBounded();
    return `rgb(${r},${g},${b})`;
};
