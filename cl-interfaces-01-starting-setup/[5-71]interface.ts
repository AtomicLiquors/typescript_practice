interface Person {
    name: string;
    age: number;
    option?: string;
    // private, public 등 접근 제한자를 설정할 수는 없습니다.
    // readonly는 설정할 수 있습니다.
    // ?를 붙여서 옵셔널로 지정할 수도 있습니다.

    /* 인터페이스 내부의 메서드 선언 신택스 */
    // Java와 달리 abstract 키워드를 사용하지 않는 모양입니다.
    greet(phrase: string): void;

}


/* 인터페이스를 구현한 객체 선언 */
let user1: Person;

user1 = {
    name: 'Max',
    age: 30, 
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there - I am');

class MetaHuman implements Person {
    name: string;
    age = 300;
    option?: string;

    /* 옵셔널한 속성을 부여하는, 옵셔널 매개변수를 넣은 생성자 */
    constructor(n: string, opt?: string){
        this.name = n;
        
        if(opt){
            this.option = opt;
        }
    }

    greet(phrase: string): void {
        console.log('Superhero Landing!')
    }
}


/* 커스텀 타입을 정의하면 되는데.. 왜 인터페이스를 쓰나요? */
// 여기선 유니언 타입도 지정할 수 있는데.
/*
type Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}
*/


/* 인터페이스를 함수 타입으로 사용하기 */ 
interface AddFn {
    (a: number, b: number): number; 
    // 익명 함수 선언하기. 콜론이 아닌 => 를 사용하는 것을 주목합시다.
}

/* 인터페이스 AddFn을 구현한 함수 addFn */
let addFn: AddFn;
addFn = (n1: number, n2: number) => {
    return n1 + n2;
}