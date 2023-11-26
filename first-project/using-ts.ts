const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  //console.log(add(Number(input1.value), Number(input2.value)));
  console.log(add(+input1.value, +input2.value)); // 숫자로 변환
});
