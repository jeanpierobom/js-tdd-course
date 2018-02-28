import * as R from 'ramda';

import sum, { sub } from './utils';

const arr1 = [2, 3, 5, 0, 9, 8, 6, 5, 4];
const arr2 = [7, 2, 3, 1, 9, 18, 11, -1, 0];

const arr3 = R.union(arr1, arr2);

console.log(arr3);

console.log(sum(3, 5));
console.log(sub(4, 2));
console.log('updated.');
