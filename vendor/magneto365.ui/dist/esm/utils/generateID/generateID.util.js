var generateID = function () {
    var markTime = new Date().getTime();
    var randomNumber = Math.floor(Math.random() * 1000000);
    var uniqueID = "".concat(markTime).concat(randomNumber);
    return uniqueID;
};

export { generateID };
//# sourceMappingURL=generateID.util.js.map
