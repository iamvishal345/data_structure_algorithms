function printString(columnNumber) {
  // To store result (Excel column name)
  let columnName = [];

  while (columnNumber > 0) {
    // Find remainder
    let rem = columnNumber % 26;

    if (rem == 0) {
      columnName.push("Z");
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  // Reverse the string and print result
  console.log(columnName.reverse());
}

// Driver program to test above function
printString(27);
printString(51);
printString(52);
printString(80);
printString(676);
printString(702);
printString(705);
