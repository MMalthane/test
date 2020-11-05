// function to check if the string entered is a Palindrome
//palindrome is a word which spelled same forwards and backwards


function palindrome(str) {
    let reg = /[\W_]/g // regular expression - non alphanumberic characters
    let lowerstr = str.toLowerCase().replace(reg, ""); // convert the original str to lowercase and remove the space
    let reverseStr = lowerstr.split("").reverse().join("");
    // console.log(reverseStr);
    return reverseStr === lowerstr ? true : false // comparing reverse str and change str

}

console.log(palindrome("kayak"));
console.log(palindrome("abc"));
console.log(palindrome("1"));
console.log(palindrome("ab !ab"));
console.log(palindrome("k9 t9k"));


module.exports = {
    palindrome
};