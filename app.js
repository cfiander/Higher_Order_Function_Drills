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