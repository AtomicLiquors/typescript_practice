/* ! : null을 반환하지 않겠다. */
/* "as HTMLInputElement" */

import { type } from "os";

const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

/* 함수 매개변수 타입 지정 */
function add(num1: number, num2: number) {

  //Javascript였다면 어떻게 타입 체크를 했을까? : 런타임에 체크
  /*
  if( typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw new Error('Incorrect Input!');
  }*/
  
  return num1 + num2;
}

/* + : 숫자 타입으로 변환. */
button.addEventListener("click", function() {
  //console.log(add(Number(input1.value), Number(input2.value)));
  console.log(add(+input1.value, +input2.value)); // 숫자로 변환
});


/*값을 반환하거나, 반환하지 않는 함수*/
function addWithResult(n1: number, n2: number, showResult: boolean){
  if(showResult){
    console.log(n1 + n2);
  }else{
    return n1 + n2;
  }
}

addWithResult(5, 28, true);