import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let arr = [];
  let res;
  if (Array.isArray(members) !== true || (members == undefined)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let a = members[i].trim().toUpperCase();
      arr.push(a[0]);
    }

  }

  res = arr.sort().join('');
  return res;
}
