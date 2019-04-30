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
