import _ from 'lodash';

declare var GLOBAL: string;
// 타입스크립트에 기능이나 변수를 선언해 준다. (일반적으로 패키지 또는 전역변수)

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);