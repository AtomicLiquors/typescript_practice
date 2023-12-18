/* 사용자가 입력하는 값을 모두 Parameter로 받고 싶다. */
/*
const addMultipleVars = (...numbers) => {
    // 선언을 이렇게만 하면 매개변수 numbers의 타입은 any[]가 됩니다.

};
*/

const addMultipleNumbers = (...numbers : number[]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};


/* push 메서드의 매개변수 */
const emptyArray: string[] = [];
emptyArray.push('30');

/**
 * push 메서드의 정의를 보면 매개변수가 spread연산자를 사용합니다.
 * (method) Array<string>.push(...items: string[]): number
 * 그렇다고 배열을 매개변수로 전달할 필요는 없고
 * 
 * + return 타입인 number는 늘어난 배열의 길이.
 */


/* 튜플로부터 고정 갯수의 인수를 받기. */
const addFromTuple = (...numbers : [number, number, number]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};

const result1 = addMultipleNumbers(1, 10, 100, 1000, 10000);
const result2 = addFromTuple(1, 10, 100);