/* 유니언 타입과 연결되는 개념 */

const lucky = 7;
/* 
 * vsc에서 위 'lucky'에 커서를 올려보면,
 * const lucky : number가 아니라
 * const lucky : 7이라고 뜬다. 
 * 타입 이름이 '7'이라는 거.
 * "lucky는 상수며, 할당된 값이 정확한 타입이라는 것을 안다!"
 */

/* 문자열 활용 */
/*
 * 아래 메서드에서 resultConversion 매개변수에는 'as-number' 또는 'as-text'가 들어갑니다.
 * 이때 아무 stirng이 들어가도 되는 게 아니라 위와 같이 지정된 문자열만 넣어주고 싶다면
 * Enum을 사용해주거나, '리터럴 타입'을 활용할 수 있는 것입니다.
 */

/* before */
// function combineWithConversion(input1: number | string, input2: number | string, resultConversion: string) {

/* after) */
function combineWithConversion(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    // const result = input1 + input2;
    // "에러 : 더하기 연산이 허용되지 않습니다"
    // 이건 타입스크립트에서 숫자 + 문자열 간 더하기 연산을 불허하는 게 아니라,
    // 타입스크립트가 그저 '유니언 타입'이라고만 판단하고 그 내부에 실제 어떤 타입들이 들어가는지는 확인하지 않기 때문입니다.
    // 따라서 런타입 타입 검사를 더해줘야 합니다.

    let result;
  
    if(typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-number'){
        return +result
    } else {
        return result.toString();
    }
  }
  
  
const convertedAges = combineWithConversion(30, 26, 'as-number');
console.log(convertedAges);

const convertedStringAges = combineWithConversion('30', '26', 'as-number');
console.log(convertedStringAges);


const convertedNames = combineWithConversion('Max', 'Anna', 'as-text');
console.log(convertedNames);