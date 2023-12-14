/* 리턴 타입 선언하기 */
function add(n1: number, n2: number) : string {
    return n1.toString() + n2.toString();
}
// 이 경우는 사실 특별한 이유가 없다면 타입스크립트 추론에 맡기는 게 더 낫습니다.
// 다른 타입을 리턴하면 타입 선언도 함께 바꿔야 해요.

function printResult(num: number){
    console.log('Result : ' + num)
}
// 이 함수의 타입은 'void'로 추론됩니다. void는 순수 자바스크립트에 존재하지 않습니다.