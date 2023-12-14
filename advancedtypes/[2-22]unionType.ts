// 숫자, 문자열을 넣어도 모두 작동하게 만들고 싶다.
// 변수가 여러 개의 타입을 전달받을 수 있게 해 준다.
function combine(input1: number | string, input2: number | string) {
  // const result = input1 + input2;
  // "에러 : 더하기 연산이 허용되지 않습니다"
  // 이건 타입스크립트에서 숫자 + 문자열 간 더하기 연산을 불허하는 게 아니라,
  // 타입스크립트가 그저 '유니언 타입'이라고만 판단하고 그 내부에 실제 어떤 타입들이 들어가는지는 확인하지 않기 때문이다.
  // 따라서 런타입 타입 검사를 더해줘야 한다.
  let result;

  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);