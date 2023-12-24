const paragraph = document.querySelector('p');
// querySelector로 태그 이름을 지정해 주면, HTMLParagraphElement라는 type이 인식되었습니다.

const paragraphWithID = document.getElementById('id');
// ID 이름만 가지고 DOM을 선택하면 HTMLElement로 인식이 됩니다.
// 실제 이 아이디가 어떤 DOM에 부여가 되었든, 타입은 HTMLElement로 고정입니다.
// typescript는 html 파일을 타고 들어가서 판단하는 동작을 하지 않습니다.


/* 이 코드는 컴파일 에러가 발생합니다. */
// const userInputElement = document.getElementById('user-input')!; // ! : not null
// userInputElement.value = 'User Value';


/* <>를 이용해 타입 변환을 시켜 준 아래 코드는 정상 동작합니다. */
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; 
userInputElement.value = 'User Value';

// HTMLInputElemnt 타입은 tsconfig.js > lib에 "DOM"을 추가했을 때만 사용 가능합니다.


/* jsx, 리액트 컴포넌트에서 <>는 '화면에 뭘 뿌릴지'를 나타내기 때문에 타입스크립트 <>와 충돌할 수 있습니다.*/
/* 그래서 typescript에서는 as를 이용한 형 변환 또한 지원합니다. */
const userInputElement2 = document.getElementById('user-input') as HTMLInputElement; 
userInputElement2.value = 'User Value';

/* 위와 같은 코드는 '해당 변수가 null이 아니다'라는 의미까지 내포하고 있습니다. */
/* null이 될 가능성이 있는 경우라면 아래와 같이 작성합니다. */
const nullableElement = document.getElementById('user-input-nullable'); 

if(nullableElement){
    (nullableElement as HTMLInputElement).value = 'User value'
}
