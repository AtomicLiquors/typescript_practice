//Javascript의 대표적인 타입은 number, string, boolean, object

let number1 : number = 5;
// 타입 지정이 불필요. 타입스크립트는 값으로부터 타입을 충분히 추론할 수 있다.

let number2: number;
// 값을 추후에 동적으로 할당할 경우 타입을 선언.
number2 = 5;
// number2 = '5'; -> 컴파일 에러


/* 문자열 숫자로 변환 */
let numberFromString: number;

numberFromString = +'5';
// '+'연산자는 문자열을 숫자로 바꿔 준다.
// 숫자로 변환될 수 없는 문자열을 집어넣은 경우 결과는 'NaN(Not a Number)'

numberFromString = parseInt('5');
numberFromString = parseFloat('5');
// parseFloat의 매개변수는 값 하나뿐이지만,
// parseInt의 매개변수로는 radix가 있다.
// string의 진수를 나타내는 2부터 36까지의 정수입니다. 주의하세요. "기본 값이 10이 아닙니다!""

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt