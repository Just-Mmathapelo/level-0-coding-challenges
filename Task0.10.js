function commonChar(input1, input2) {
  let count = 0;
  const obj = input2.split("");
  for(input1 of input2){
    let idx = obj.findIndex(s => s === str);
    if(idx >= 0){
      count++;
      obj.splice(idx, 1);
    }
  }
  return count;
}
