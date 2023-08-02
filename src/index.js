module.exports = function reverse (n) {
  let result = 0;
  n = Math.abs(n);

  while (n !== 0) {
    let restNum = n % 10;
    n = Math.floor(n / 10);
    result = result * 10 + restNum;
  }
  return result;
}
