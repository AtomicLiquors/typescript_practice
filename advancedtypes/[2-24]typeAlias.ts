/* Type Alias, 사용자 지정 타입 */
/*
 * 유니언 타입과 같이, 일일이 작성하기 번거로운 타입 유형에 alias를 지정해 줄 수 있습니다.
 */
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'


/*
 * 복잡한 객체 타입에도 Alias를 지정할 수 있습니다.
 */
type User = { name: string; age: number};
const u1: User = { name: 'Max', age: 30}


/* 객체 타입을 함수의 매개변수로 사용하기 */
// Before
function greet(user: {name : string; age: number}){
    console.log('I am ' + user.name);
}

// After
function greetAlias(user: User){
    console.log('I am ' + user.name);
}


