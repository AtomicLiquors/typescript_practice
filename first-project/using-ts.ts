/* ! : null을 반환하지 않겠다. */
/* "as HTMLInputElement" */

const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

/* 함수 매개변수 타입 지정 */
function add(num1: number, num2: number) {
  return num1 + num2;
}

/* + : 숫자 타입으로 변환. */
button.addEventListener("click", function() {
  //console.log(add(Number(input1.value), Number(input2.value)));
  console.log(add(+input1.value, +input2.value)); // 숫자로 변환
});
