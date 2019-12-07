function checkArray(numbers, sum) {
  const n = [...numbers].length - 1;
  let signs = [];
  signs = generateAllBinaryCombinations(n, [], 0, signs);
  for (var j = 0; j < signs.length; j++) {
    let rowSum = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
      if (!signs[j][i - 1])
        rowSum = rowSum - numbers[i];
      else
        rowSum = rowSum + numbers[i];
    }
    if (rowSum == sum) {
      return true;
    }
  }
  return false;
}

function generateAllBinaryCombinations(n, array, i, res) {
  if (i == n) {
    res.push([...array]);
    return;
  }
  array[i] = 0;
  generateAllBinaryCombinations(n, array, i + 1, res);
  array[i] = 1;
  generateAllBinaryCombinations(n, array, i + 1, res);
  return res;
}
