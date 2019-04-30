function max(numbers) {
    let i = 1;
    let maximum = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
        i++;
    }
    return maximum;
  }
  
  function min(numbers) {
    let i = 1;
    let minimum = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
        i++;
    }
    return minimum;
  }
 
console.log(max([5, 8, 11, 2]));
console.log(min([5, 8, 11, 2]));

const average = function(array) {
    let total = 0;
    array.forEach( function(element) {
        total += element;
    }); return total/array.length;
}

console.log(average([5, 8, 11, 2]));

const repeat = function(fn, n) {
    let i = 0;
    while (i < n) {
        fn(); 
        i++;
    }
}

const hello = function() {
    console.log("Hello World");
}

const goodbye = function() {
    console.log("Goodbye World");
}


repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    arr.forEach( element => {
        if (fn(element)) {
            newArray.push(element);
        }
    })
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

const hazardWarningCreator = function(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter ++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter <= 1) {
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        } else {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
        }
        
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('There is an avalanche on the mountain');
const tornadoWarning = hazardWarningCreator('Tornado on the field');


rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
tornadoWarning('Oklahoma');

turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleArray.filter(isNegative));

function isNegative(value) {
    return value[0] >= 0 && value[1] >= 0;
  }

function addArray(value) {
    return Math.abs(value[0]) + Math.abs(value[1]);
}

console.log(turtleArray.map(addArray));

const turtleSteps = turtleArray.map(addArray);

function howManySteps(value,num) {
    console.log( `Movement #${num}: ${value} steps` );
}

let i = 1;
turtleSteps.forEach(function(element) {
    howManySteps(element, i);
    i ++;
});

function decode(string) {
    return string.split(' ')
    .reduce((acc, element) => {
        if (element.length === 3) {
            return acc += ' ';
        } else {
            return acc += element[element.length-1].toUpperCase();
        }
    },'')
}

const testString ="noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest";

console.log(decode(testString));