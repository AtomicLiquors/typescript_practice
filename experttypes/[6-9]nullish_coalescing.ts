/* Null 병합 */

const userInput = null;
const storedData = userInput || 'DEFAULT'; // 빈 문자열 ''도 falsy한 값이므로 이 방법은 userInput이 ''일 때도 우항을 대입한다.
const nullCoedData = userInput ?? 'DEFAULT'; // null이나 undefined일 때만 우항을 대입한다.
console.log(storedData);