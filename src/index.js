module.exports = function toReadable (number) {
    let small = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let big = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    str = String(number);
    if (number === 0) return 'zero';
    if (number < 20) return `${small[number]}`;
    if (number < 100) {
        return `${big[str[0]]} ${small[str[1]]}`.trim();
    }
    if (number < 1000) {
        let x = Number(str[1] + str[2]);
        if (str[1] === '0' && str[2] === '0') {
            return `${small[str[0]]} hundred`.trim();
        } else
            return `${small[str[0]]} hundred ${toReadable(x)}`;
    }
}
