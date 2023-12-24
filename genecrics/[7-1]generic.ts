/* Q. 타입스크립트에는 Array 타입이 존재합니다. 그런데 왜 다음 코드는 컴파일 에러가 일어날까요? */
//const names: Array = [];

/* A. Array는 제네릭 타입이며, 하나의 타입 인자가 필요합니다. */
const names: Array<string> = []; // 이건 사실 string[]으로 타입을 지정하는 것과 같습니다.

/* 유니언 타입과 함께 사용 */
const unionNames: Array<string | number> = [];

/* Javascript 프로미스 타입 사용 */
const promise: Promise<string> = new Promise((resolve, reject) => {
    // 항상 문자열을 반환하는 Promise를 지정
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})



/* 커스텀 제네릭 함수 */
// 타입 매개변수로는 T, 그 다음으로는 보통 U를 쓴다.
/*
function merge<T, U>(objA: T, objB: U) { 
    return Object.assign(objA, objB); // 이 때 반환 타입은 교차 타입인 T & U로 추론된다.
}

console.log(merge({name: 'Max'}, {age: 30}));
// 출력 결과 : {name: "Max", age: 30}

const mergedObj = merge({name: 'Max'}, {age: 30});
const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ['Sports']}, {age: 30});
// 이건 너무 번거롭고, 유연하지 못하죠. 이건 개념을 이해하기 위한 예시고, 
// "서로 다른 함수 호출에 대해 구체적인 타입을 지정할 수 있다"는 걸 이해하는 목적으로 보시기 바랍니다.

// 우리가 아무 객체 타입을 갖고 작업하는 게 아니라, 다른 타입의 데이터를 활용하겠구나, 라는 걸 타입스크립트가 알 수 있다. 라는데... 
// 예제 보면서 무슨 의미인지 알아가 봅시다.
*/