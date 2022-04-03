const numbers = [20, 25, 55, 45, 20, 15, 95, 25, 65, 23, 55, 68, 68];
function removeDuplicate(numbers) {
    const unique = [];
    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);