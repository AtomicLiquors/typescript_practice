const person = {
    name:'Max',
    age: 30
    // 타입 추론에 의하여 name의 타입은 string, age의 타입은 number가 된다.
};

console.log(person.name);
//console.log(person.nickname);
//.ts가 아닌 .js파일에서는 선언하지 않은 속성을 참조해도 컴파일 에러가 일어나지 않는다.

/* object 타입을 명시해 주었을 때 */
const specifiedPerson: object = {
    name: 'Max',
    age: 30
}

/* object 타입을 명시하는 것과 같은 효과 */
const bracedPerson: {} = {
    name: 'Max',
    age: 30
}

// console.log(specifiedPerson.name);
// console.log(bracedPerson.name);
// 왜 컴파일 에러가 발생하는가?

/* key별로 타입 명시해주기 */
const keyvaluedPerson: {
    name: string;
    age: number;
} = {
    name: 'Max',
    age: 30
};

//그러나 최선은 맨 위의 예시처럼 타입스크립트가 추론하도록 두는 게 낫습니다.
const personEqualToFirstExample = {
    name:'Max',
    age: 30
};



/* Nested Object */
const product = {
    id: 'abc1',
    price: 12.9,
    tag: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A High-quality Brand-new Red carpet'
    }
}