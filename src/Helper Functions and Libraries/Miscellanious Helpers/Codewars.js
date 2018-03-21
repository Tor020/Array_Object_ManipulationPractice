let c = (arg) => {
  console.log(arg)
}

// Takes the operation and 2 values and performs it on the values
function basicOp(operation, value1, value2){
  if (operation === "*"){
    return value1 * value2;
    }
  if (operation === "+"){
    return value1 + value2;
  }
  if (operation === "-"){
    return value1 - value2;
  }
  if (operation === "/"){
    return value1 / value2;
  }
}

c(basicOp('*',4,3));
c(basicOp('-',4,3));

// Prevents an array of numbers from individually occurring more than n times within the array.
function deleteNth(arr,n){
  let results = [];
  let counterObj = {};
  for (let i = 0; i < arr.length; i++){
   let currentArrayValue = arr[i];
   let count = counterObj[currentArrayValue] || 0;

    if (count < n){
      results.push(currentArrayValue);
      counterObj[currentArrayValue] = count + 1;
    }
  }
  return results
}

c(deleteNth([1,1,3,3,7,2,2,2,2], 2));
c(deleteNth([1,1,3,3,7,2,5,4,3,3,3,2,1,2,2,2], 3));