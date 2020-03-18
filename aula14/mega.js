function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var numbers = [getRandomInt(1, 60), getRandomInt(1, 60), getRandomInt(1, 60), getRandomInt(1, 60), getRandomInt(1, 60), getRandomInt(1, 60)];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
