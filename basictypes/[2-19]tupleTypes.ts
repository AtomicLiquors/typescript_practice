/* 
타입스크립트에서 추가된 '고정 길이 배열 Fixed-Length Array'
*/

/* Before Tuple */
const personWithRole = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
    //유니언 타입 : 여러 타입의 값을 넣으면 타입 추론은 'role: (string | number)[]'와 같이 나타난다.
};

personWithRole.role[1] = 10;
personWithRole.role.push('admin');


/* After Tuple */
const personWithTuple: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; 
    // 튜플 타입을 선언하는 법.
    // "이 배열은 정확히 두 개의 요소를 가진 특별한 배열이다!"
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

//personWithTuple.role[1] = 10; -> 컴파일 에러
personWithTuple.role.push('admin'); 
//고정길이라면서 push는 동작하는 이유?
//"push는 사실 튜플에서 허용되는 일종의 예외입니다. 타입스크립트가 이 오류를 잡지 못해요."
