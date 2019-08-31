function getMoneySpent(keyboards, drives, b) {
    //Print a single integer denoting the amount of money Monica will spend. 
    //If she doesn't have enough money to buy one keyboard and one USB drive, print -1 instead.
    let answer = [];
    let total;

    for (let i in keyboards) {
        for (let x in drives) {
            total = keyboards[i] + drives[x];
            if (total <= b) {
                answer.push(total);
            }
        }
    }
    
    total = Math.max(...answer)
    if (total < 0) {
        return -1;
    } else {
        return total;
    }
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58