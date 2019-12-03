console.log(findPartMaxProd(8));
console.log(findPartMaxProd(10));

function findPartMaxProd(n) {
  let a = [];
  let res = '';

  function partition(n, high, pos) {
    let i;
    if (n > 0) {
      for (i = 1; i <= high; i++) {
        a[pos] = i;
        partition(n - i, min(i, n - i), pos + 1);
      }
    } else {
      for (i = 0; i < pos; i++)
        res = res + a[i] + '.';
      res = res.slice(0, -1);
      res += "\n";
    }
  }

  partition(n, n - 1, 0);
  res += n;
  let arrayOfPartitions = res.split('\n');

  let prods = [];

  for (var i = 0; i < arrayOfPartitions.length; i++) {
    let prod = getProd(arrayOfPartitions[i]);
    prods.push(prod);
  }
  let maxProd = 0;
  for (var i = 0; i < prods.length; i++) {
    if (prods[i] > maxProd) maxProd = prods[i];
  }
  let partitionsWithMaxProd = [];
  for (var i = 0; i < prods.length; i++) {
    if (prods[i] == maxProd) {
      partitionsWithMaxProd.push(arrayOfPartitions[i].split('.').map(e => Number(e)));
    }
  }

  partitionsWithMaxProd.sort(function(a, b) {
    return a.length - b.length;
  });
  partitionsWithMaxProd.push(maxProd);
  return partitionsWithMaxProd;
}

function min(x, y) {
  if (x < y) return x;
  else return y;
}

function getProd(str) {
  let nums = str.split('.');
  return nums.reduce((a, b) => a * b);
}
