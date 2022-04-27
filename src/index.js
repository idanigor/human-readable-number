module.exports = function toReadable(number) {
    const massiv1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const massiv20 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const massiv19 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let i100 = Math.floor(number / 100);
    let result10 = number % 100;
    let i10 = Math.floor(result10 / 10);
    let i1 = result10 % 10;
    let result = "";
    let e100 = massiv1[i100] + " " + "hundred";

    if (number >= 100) {
        if (number % 100 === 0) {
            result = e100;
        } else if (i10 === 1) {
            result = e100 + " " + massiv19[i1];
        } else if (number % 10 === 0) {
            result = e100 + " " + massiv20[i10];
        } else if (massiv20[i10] === "") {
            result = e100 + " " + massiv1[i1];
        } else {
            result = e100 + " " + massiv20[i10] + " " + massiv1[i1];
        }
    } else if (number >= 20) {
        if (number % 10 === 0) {
            result = massiv20[i10];
        } else {
            result = massiv20[i10] + " " + massiv1[i1];
        }
    } else if (i10 === 1) {
        result = massiv19[i1];
    } else if (number === 0) {
        result = "zero";
    } else {
        result = massiv1[i1];
    }
    return result;
};
