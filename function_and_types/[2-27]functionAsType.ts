// 2-27
function addNumbers(n1: number, n2: number) : number {
    return n1 + n2;
}

console.log(+addNumbers(5, 12));

let combineValues = addNumbers;
console.log(combineValues(8,8));

/**
 * Q. 이 코드의 실행 결과는 무엇일까요?
 * A. 정상 작동합니다. 변수에 함수를 가리키는 포인터를 저장할 수 있습니다.
 * 
 * 하지만 이 코드의 문제점은 'combineValues'의 타입이 'any'라는 것입니다.
 * combineValues의 값은 얼마든지 다른 부적절한 타입으로 바뀔 수 있습니다.
 */


/* 해결1 : Function타입으로 선언해주기 */
let combineFunction: Function = addNumbers;

// 이 경우에는 부적절한 반환 타입을 돌려주는 다른 함수로 바뀔 수 있습니다.


/* 해결2 : ArrowFunction을 이용해 타입 선언해주기 */
let combineArrowFunction: (p1: number, p2: number) => number;

// "두 개의 숫자 매개변수를 받아서 숫자 타입을 반환하는 함수"
