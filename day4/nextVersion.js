function nextVersion(str) {
  if (!str) return '';
  let nums = str.split(".").map(val => parseInt(val, 10));
  if (nums.length == 1) {
    nums[0] += 1;
    return nums.toString();
  }
  let reversedNums = nums.reverse();
  let incrementNext = false;
  reversedNums.forEach((value, index) => {
    if (index == 0 ||                                       //if first element
      (index < reversedNums.length - 1 && incrementNext)) { //if intermediate element
      reversedNums[index] = value + 1;
      if (reversedNums[index] == 10) {
        reversedNums[index] = 0;
        incrementNext = true;
      }
    } else if (index == reversedNums.length - 1 && incrementNext) { //if last element
      reversedNums[index] = value + 1;
    }
  });

  return reversedNums.reverse().join('.');
}

//////////Testing///////////////////////////////////////////////////////////////
console.log(nextVersion("1.2.3") === "1.2.4");
console.log(nextVersion("0.9.9") === "1.0.0");
console.log(nextVersion("1") === "2");
console.log(nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9") === "10.0");
