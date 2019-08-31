function miniMaxSum(arr) {
  let arrLength = arr.length;
  let arrComparison = [];

  for (let i = 0; i < arrLength; i++) {
      let newArr = [...arr];
      newArr.splice(i, 1);
      arrComparison.push(newArr.reduce((a, b) => a + b, 0));
  }

  arrComparison.sort((a, b) => a - b);
  console.log(arrComparison[0], arrComparison[4]);
}

miniMaxSum([1, 2, 3, 4, 5]);
