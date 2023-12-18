class Department {

    name: string;

    constructor(n: string){
        this.name = n;
    }

    // describe() {
    describe() {
        // console.log('Departemnt: ' + name); -> 이 때 name은 전역으로 선언된 name을 참조합니다. this를 빼먹지 마세요.
        console.log('Departemnt: ' + this.name);
    }
}
// 객체와 비슷한 신택스지만, 객체는 아닙니다.
// 키-값 쌍이 아니라 실제 객체의 필드가 가질 이름과 타입인 거니까요.

const accounting = new Department("Accounting");  
accounting.describe();

/* 아래처럼 더미 객체를 만들고 accounting 객체가 가진 메서드를 참조했습니다. */
/* 이 메서드는 실행될까요, 실행되지 않을까요? */
const accountingDummy = {describe: accounting.describe}; 

accountingDummy.describe();
/* A: 실행은 됩니다. 하지만 undefined가 출력됩니다.
 * 
 * 이 때 describe() 내부의 this 키워드는 accounting을 참조하지 않습니다. 
 * this는 현재 "해당 메서드를 호출한 객체"를 참조한다는 걸 기억합시다.
 */
