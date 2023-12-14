/* 배열에서 요소를 꺼내서 좌변에 저장하는 ES6 문법 */
const numbersToDestruct = [1, 10, 100, 100, 10000];
const [destructedNumber1, destructedNumber2] = numbersToDestruct;
const [number1withSpread, number2withSpread, ...restOfTheNumbers] = numbersToDestruct;

console.log(numbersToDestruct, destructedNumber1, destructedNumber2)



const personToDestruct = {
    firstName: 'Max',
    age: 30
}

const { firstName, age } = personToDestruct;
const { firstName: personName, age: personAge } = personToDestruct;
// javascript syntax를 이용하여, 구조분해해서 얻은 변수에 alias 지정.