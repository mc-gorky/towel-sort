
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix){
    return [];
  }
  
  let sorted = [];
  
  matrix.forEach((item,index) => index % 2 === 0 ? item : item.reverse());

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      sorted.push(matrix[i][j]);
    }
  }
  
  return sorted;
}
