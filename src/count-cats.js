import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  const arr = [];
  const ears = '^^';


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      //if ( matrix[i].toString() ===  )
      if (matrix[i][j] == ears) {
        arr.push(matrix[i][j]);
        //console.log(arr);
        //console.log(arr.length);

      }
    }
  }
  const count = arr.length;
  return count === 0 ? 0 : count;

}
