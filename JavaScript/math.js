// ~~~~~~~~~~Math.abs= jkono number postively convert korbe~~~~~~~~~~~~~~~~

// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);

// ~~~~~~~~~~Math.ceil= jkono vognaonsho k 1 add kore convert korbe~~~~~~~~~~~~~~~~
// const myNumber = 6.6398;
// const output = Math.ceil(myNumber);
// console.log(output);

// ~~~~~~~~~~Math.floor= jkono vognaonsho k nicher dike convert korbe~~~~~~~~~~~~~~~~
// const myNumber = 20.98554
// const output = Math.floor(myNumber);
// console.log(output);

// ~~~~~~~~~~Math.round= jkono vognaonsho k kasakasi convert korbe~~~~~~~~~~~~~~~~
// const myNumber = 30.4265;
// const output = Math.round(myNumber);
// console.log(output);

// ~~~~~~~~~~Math.random= jkono vognaonsho k kasakasi convert korbe~~~~~~~~~~~~~~~~
// const output = Math.random() * 6;
// const rounded = Math.floor(output);
// console.log(rounded);

// destructuring................
// var first = 7;
// var second = 5;
// [first, second] = [second, first];
// console.log(first, second);

// 3 compare.............
// const businessMan = 600;
// const banker = 900;
// const police = 758;
// if (businessMan > banker && businessMan > police) {
//     console.log('businessMan is the biggest');
// }
// else if (banker > businessMan && banker > police) {
//     console.log('banker is the biggest');
// }
// else {
//     console.log('army is the big power man.')
// }

// <<<<<<<<or>>>>>>>>>>>
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const larger = findLargest(120, 310);
console.log('largest is', larger);