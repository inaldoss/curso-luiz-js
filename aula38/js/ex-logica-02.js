
function eDivide3(num) {

    if (num % 3 == 0) {
        return 'Fizz'
    } else
        return num
}

function eDivide5(num) {
    if (num % 5 == 0) {
        return 'Buzz'
    } else
        return num
}

function eDivide35(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    } else
        return num
}

for (i = 0; i <= 100; i++) {
    console.log(eDivide3(i));
}



