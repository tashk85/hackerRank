function diagonalDifference(arr) {
    let firstDiag = 0;
    let secondDiag = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (i === j) {
                firstDiag += arr[i][j];
                console.log(arr[i][j]);
            } 
            if (i === n - 1 - j) {
                secondDiag += arr[i][j];
                console.log(arr[i][j]);
            }
        }
    }

    let sum = Math.abs(firstDiag - secondDiag);
    return sum;
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));