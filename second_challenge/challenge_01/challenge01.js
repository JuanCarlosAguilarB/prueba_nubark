/**
 * Returns an object with the number of 5 dollar
 * and 1 dollar bills needed to represent a given amount. 
 */
    export function oneAndFiveBills(amount) {
        let ones=amount%5;
        let fives=(amount-ones)/5;

        return {'fives':fives,"ones":ones}
}

