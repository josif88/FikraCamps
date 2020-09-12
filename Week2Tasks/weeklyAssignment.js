// -------------------- Q1 --------------------//
function doubleFactorial(number) {
  if (number <= 2) return number;
  return doubleFactorial(number - 2) * number;
}
// console.log(doubleFactorial(2));
// console.log(doubleFactorial(9));
// console.log(doubleFactorial(6));

// -------------------- Q2 --------------------
function findwordsCount(str) {
  str = str.replace(/['-,]/g, "");
  let wordsArr = str.split(" ");

  let json = {};

  for (let word of wordsArr) {
    json[word] == undefined ? (json[word] = 1) : (json[word] = json[word] + 1);
  }

  return json;
}
// console.log(findwordsCount('hello, thats what he said hello'));

// -------------------- Q3 --------------------
function keysAndValues(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  return [keys, values];
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// -------------------- Q4 --------------------
function findNemo(str) {
  str = str.split(" ");
  let nemoLocation = str.indexOf("Nemo") + 1;
  return `I found Nemo at ${nemoLocation}!`;
}
// console.log(findNemo("I am finding Nemo !"));

// -------------------- Q5 --------------------
function calculator(num1, op, num2) {
  return eval("num1" + op + "num2");
}
// console.log(calculator(4, "/", 2));
// console.log(calculator(2, "*", 2));

// -------------------- Q6 --------------------
function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2) && !(i % 2)) {
      continue;
    } else if (arr[i] % 2 && i % 2) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isSpecialArray([8, 7, 4, 9, 6, 1, 6, 9]));
// console.log(isSpecialArray([2, 7, 7, 7, 6, 1, 6, 3]));

// -------------------- Q7 --------------------
arr = [2, 7, 4, 9, 6, 1, 6, 3];
arr.maxByProperty = function () {
  return Math.max(...this);
};

// console.log(arr.maxByProperty());

// -------------------- Q8 --------------------
function isPowByProperty(num1, num2) {
  return num1 ** Math.sqrt(num2) % 1 == 0;
}
// console.log(isPowByProperty(2, 256));
// console.log(isPowByProperty(3, 9));
// console.log(isPowByProperty(3, 6));

// -------------------- Q9 --------------------
function isthereSeven(arr) {
  return arr.join("").includes(7);
}
//console.log(isthereSeven([1, 2, 3, 4, 5, 6, 17]));

// -------------------- Q10 --------------------
function whatDay(day, after) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thersday",
    "Friday",
    "Saterday",
  ];
  dayAfter = after > 6 ? after % 7 : after;
  return weekDays[weekDays.indexOf(day) + dayAfter];
}
//console.log(whatDay("Sunday", 2));
// console.log(whatDay("Mon", 12));

// -------------------- Q11 --------------------
function numInStr(arr) {
  return arr.map((a) => a.replace(/[a-z]/g, "")).join("");
}
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));

// -------------------- Q12 --------------------
function whatIsThis(parameter) {
  return Array.isArray(parameter) ? "Array" : typeof parameter;
}
// console.log(whatIsThis([1, 2, 3, 4]));
// console.log(whatIsThis({a: 1, b: 2, c: 3}));
// console.log(whatIsThis("Hello !"));

// -------------------- Q13 --------------------
function ridOfNulls(obj) {
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) obj[key] = "";

    if (typeof obj[key] === "object") {
      ridOfNulls(obj[key]);
    }
  });
  return obj;
}
// console.log(ridOfNulls({name: 'Ali', age: null}));
// console.log(ridOfNulls({name: 'Ali', age: 20, address: {street: '14', coordinates: {long: null, lat: null}}}));

// -------------------- Q14 --------------------
function filesDescription(str) {
  let arr = str.split("\n");

  let musicReg = /mp3|flac/;
  let moviesReg = /mkv|mp4/;
  let imagesReg = /jpg|png/;

  let music = arr.filter((a) => musicReg.test(a));
  let movies = arr.filter((a) => moviesReg.test(a));
  let images = arr.filter((a) => imagesReg.test(a));
  let others = arr.filter(
    (a) => !musicReg.test(a) && !moviesReg.test(a) && !imagesReg.test(a)
  );

  const DigitFilter = /[0-9]+\d/g;

  let musicSum = music.length
    ? music.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let moviesSum = movies.length
    ? movies.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let imagSum = images.length
    ? images.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;
  let otherSum = others.length
    ? others.map((a) => a.match(DigitFilter)).reduce((a, b) => +a + +b)
    : 0;

  return `music ${musicSum}b
    images ${imagSum}b
    movies ${moviesSum}b
    other ${otherSum}b
    `;
}
// console.log(filesDescription(`My.song.mp3 11b
// greatSong.flac 1000b
// not3.txt 5b
// video.mp4 200b
// game.exe 100b
// mov!e.mkv 10000b`));

// -------------------- Q15 --------------------
function runme() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar);

  {
    // let baz = "Bazz";
    var baz = "Bazz";
    console.log(baz);
  }

  console.log(baz);
}

// runme();

// -------------------- Q16 --------------------
function findByBinary(arr, num) {
  //Make sure it is sorted array
  arr.sort((a, b) => a - b);
  //figure given number side
  if (num >= arr[arr.length / 2]) {
    for (let i = arr.length / 2; i < arr.length; i++) {
      if (arr[i] === num) return i;
    }
  } else {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] === num) return i;
    }
  }
  return -1;
}

// console.log(findByBinary([1, 2, 3, 4, 5, 6, 29, 55, 74, 93], 29));

// -------------------- Q17 --------------------
function makeQueue() {
  Array.prototype.queue = function (val) {
    this.unshift(val);
    console.log(this);
  };
  Array.prototype.dequeue = function (val) {
    this.shift();
    console.log(this);
  };

  let arr = [];
  arr.queue(4);
  arr.queue(3);
  arr.queue(12);
  arr.dequeue();
}

// makeQueue();

// -------------------- Q18 --------------------
function mySplit(str, op) {
  let arr = [];
  let startIndex,
    endIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === op) {
      endIndex = i;
      let word = str.substring(startIndex, endIndex++);
      arr.push(word);
      startIndex = endIndex;
    }
  }
  arr.push(str.substring(startIndex, str.length));
  return arr;
}
//console.log(mySplit("Hi there, how are you", " "));
//console.log(mySplit("Hi there, how are you", ","));

// -------------------- Q19 --------------------
function pileOfShoes(str) {
  let rOnes = 0;
  let lOnes = 0;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      rOnes = rOnes + 1;
    } else {
      lOnes = lOnes + 1;
    }
    if (lOnes == rOnes) {
      endIndex = i;
      console.log(str.substring(startIndex, ++endIndex));
      startIndex = endIndex;
      lOnes = 0;
      rOnes = 0;
    }
  }
}
//pileOfShoes("RLRRLLRLRRLL");
//pileOfShoes("RLLRRRRLLRLL");
