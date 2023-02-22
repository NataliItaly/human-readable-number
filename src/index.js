module.exports = function toReadable (number) {

    let arr = String(number).split("");
    let units = "";
    let tens = "";
    let hundreds = "";

    function countUnits(arr) {
        if (arr[arr.length - 1] === "1" && arr[arr.lenght - 2] !== "1") {
            units = "one";
        } else if (arr[arr.length - 1] === "2") {
            units = "two";
        } else if (arr[arr.length - 1] === "3") {
            units = "three";
        } else if (arr[arr.length - 1] === "4") {
            units = "four";
        } else if (arr[arr.length - 1] === "5") {
            units = "five";
        } else if (arr[arr.length - 1] === "6") {
            units = "six";
        } else if (arr[arr.length - 1] === "7") {
            units = "seven";
        } else if (arr[arr.length - 1] === "8") {
            units = "eight";
        } else if (arr[arr.length - 1] === "9") {
            units = "nine";
        }
        console.log(units);
        return units;
    }

    function countTens(arr) {
        if (arr[arr.length - 2] === "1") {
            countTensNumber();
        } else if (arr[arr.length - 2] === "0") {
            tens = '';
        } else if (arr[arr.length - 2] === "2") {
            tens = "twenty";
        } else if (arr[arr.length - 2] === "3") {
            tens = "thirty";
        } else if (arr[arr.length - 2] === "4") {
            tens = "forty";
        } else if (arr[arr.length - 2] === "5") {
            tens = "fifty";
        } else if (arr[arr.length - 2] === "6") {
            tens = "sixty";
        } else if (arr[arr.length - 2] === "7") {
            tens = "seventy";
        } else if (arr[arr.length - 2] === "8") {
            tens = "eighty";
        } else if (arr[arr.length - 2] === "9") {
            tens = "ninety";
        }
        console.log(tens);
        return tens;
    }

    function countHundreds(arr) {
        if (arr[arr.length - 3] === "1") {
            hundreds = "one hundred";
        } else if (arr[arr.length - 3] === "2") {
            hundreds = "two hundred";
        } else if (arr[arr.length - 3] === "3") {
            hundreds = "three hundred";
        } else if (arr[arr.length - 3] === "4") {
            hundreds = "four hundred";
        } else if (arr[arr.length - 3] === "5") {
            hundreds = "five hundred";
        } else if (arr[arr.length - 3] === "6") {
            hundreds = "six hundred";
        } else if (arr[arr.length - 3] === "7") {
            hundreds = "seven hundred";
        } else if (arr[arr.length - 3] === "8") {
            hundreds = "eight hundred";
        } else if (arr[arr.length - 3] === "9") {
            hundreds = "nine hundred";
        }
        console.log(hundreds);
        return hundreds;
    }

    function countTensNumber(arr) {
        if (arr[arr.length - 1] === "1") {
            tensNumber = "eleven";
        } else if (arr[arr.length - 1] === "0") {
            tensNumber = "ten";
        } else if (arr[arr.length - 1] === "2") {
            tensNumber = "twelve";
        } else if (arr[arr.length - 1] === "3") {
            tensNumber = "thirteen";
        } else if (arr[arr.length - 1] === "4") {
            tensNumber = "fourteen";
        } else if (arr[arr.length - 1] === "5") {
            tensNumber = "fifteen";
        } else if (arr[arr.length - 1] === "6") {
            tensNumber = "sixteen";
        } else if (arr[arr.length - 1] === "7") {
            tensNumber = "seventeen";
        } else if (arr[arr.length - 1] === "8") {
            tensNumber = "eighteen";
        } else if (arr[arr.length - 1] === "9") {
            tensNumber = "nineteen";
        }
        console.log(tensNumber);
        return tensNumber;
    }

    let readableNum = "";
    if (arr.length === 1 && arr[0] === "0") {
        readableNum = "zero";
        //console.log('length' + readableNum.lenght);
    } else if (arr[arr.length - 2] === "1") {
        readableNum = (countHundreds(arr) + " " + countTensNumber(arr)).trim();
    } else if (arr[arr.length - 2] === "0") {
        readableNum = (
            countHundreds(arr) +
            " " +
            countUnits(arr)
        ).trim();
    }
    else {
        readableNum = (
            countHundreds(arr) +
            " " +
            countTens(arr) +
            " " +
            countUnits(arr)
        ).trim();
    }

    return readableNum;

}
