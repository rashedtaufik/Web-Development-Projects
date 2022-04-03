// count the number of vowels in a String**********
function countVowel(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i].toLowerCase();
        if (letter == "a") || letter == "e" || letter == "i" || letter == "o" || letter == "u"{
            count = count + 1;
        }
    }
    return count;
}
let string = "Quick brown fox jumps over the lazy dog";
console.log(countVowel(string));

error show