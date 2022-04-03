function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var factorial = getFactorial(7);
console.log('it is 7 factor is', factorial);