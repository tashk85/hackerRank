function compareTriplets(a, b) {
    let answer = [0, 0];

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            answer[0] += 1;
        } else if (b[i] > a[i]) {
            answer[1] += 1;
        }
    }
    return answer;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [1, 1]
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [2, 1]