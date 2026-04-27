module.exports = function toReadable(number) {
  const numbers1to9 = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
  };
  const numbers11to90 = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  function getOneDigit(num) {
    return numbers1to9[num];
  }

  function getTwoDigit(num) {
    if (numbers11to90[num]) return numbers11to90[num];
    const units = num % 10;
    const tens = num - units;
    return `${numbers11to90[tens]} ${getOneDigit(units)}`;
  }

  function getThreeDigit(num) {
    const rest = num % 100;
    const hundreds = (num - rest) / 100;
    let restStr;
    if (rest === 0) restStr = '';
    if (rest > 0 && rest < 10) restStr = getOneDigit(rest);
    if (rest > 9) restStr = getTwoDigit(rest);
    return `${getOneDigit(hundreds)} hundred ${restStr}`.trim();
  }

  if (number > 9 && number < 100) return getTwoDigit(number);
  if (number > 99 && number < 1000) return getThreeDigit(number);
  return getOneDigit(number);
};
