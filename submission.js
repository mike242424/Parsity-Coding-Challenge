const findSum = function(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const findFrequency = function(array) {
    let arr = [];
  let obj = {
    most: "",
    least: "",
  };

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    arr.push(count);
  }

  obj.most = array[arr.indexOf(Math.max(...arr))];
  obj.least = array[arr.indexOf(Math.min(...arr))];
  return obj;
};

const isPalindrome = function(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    // console.log(str[str.length - 1 - i]);
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const largestPair = function(array) {
  var product = [];
  for (var i = 0; i <= array.length; i++) {
    product.push(array[i] * array[i + 1]);
    product.sort((a, b) => b - a);
  }
  return product[0];
};

const removeParenth = function(str) {
  let newStr = str.replace(/ *\([^)]*\) */g, "");
  return newStr;
};

const scoreScrabble = function(str) {
   total = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].includes("a") ||
      str[i].includes("e") ||
      str[i].includes("i") ||
      str[i].includes("o") ||
      str[i].includes("u") ||
      str[i].includes("l") ||
      str[i].includes("n") ||
      str[i].includes("r") ||
      str[i].includes("s") ||
      str[i].includes("t")
    ) {
      total += 1;
    }

    if (str[i].includes("d") || str[i].includes("g")) {
      total += 2;
    }

    if (
      str[i].includes("b") ||
      str[i].includes("c") ||
      str[i].includes("m") ||
      str[i].includes("p")
    ) {
      total += 3;
    }

    if (
      str[i].includes("f") ||
      str[i].includes("h") ||
      str[i].includes("v") ||
      str[i].includes("w") ||
      str[i].includes("y")
    ) {
      total += 4;
    }

    if (str[i].includes("k")) {
      total += 5;
    }

    if (str[i].includes("j") || str[i].includes("x")) {
      total += 8;
    }

    if (str[i].includes("q") || str[i].includes("z")) {
      total += 10;
    }
  }
  return total;
};
