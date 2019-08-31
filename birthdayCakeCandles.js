function birthdayCakeCandles(ar) {
  let sortedArr = [...ar].sort((a, b) => a - b);

  let maxNum = sortedArr.pop();
  let finalCount = [];

  ar.forEach(num => {
    if (num === maxNum) {
      finalCount.push(num);
    }
  });

  console.log(finalCount.length);
}

birthdayCakeCandles([3, 2, 1, 3]);
birthdayCakeCandles([4, 1, 1, 5]);
