/**
 * Returns true if the given word is a palindrome and false otherwise.
 * A palindrome word can be equally read left-to-right or right-to-left.
 * Example palindromes: eye, noon, rotator, sagas.
 */
export function isPalindrome(word) {
    let reverseWord = word.split("");
    reverseWord = reverseWord.reverse();
    reverseWord = reverseWord.join("");
    
    if (word===reverseWord){
        return true;
    }
    else {
        return false;
    }


}

