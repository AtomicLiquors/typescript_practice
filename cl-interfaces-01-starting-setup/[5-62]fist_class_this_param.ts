class Department2 {

    name: string;

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department2) {
        // 타입스크립트에서 클래스 메서드에 넣을 수 있는 특수한 매개변수 this입니다.
        // 이렇게 선언하면, (정확한 의미가?)
        console.log('Departemnt: ' + this.name);
    }
}


const accounting2 = new Department2("Accounting");  
accounting2.describe();

/* 마찬가지로 아래처럼 더미 객체를 만들고 accounting 객체가 가진 메서드를 참조했습니다. */
// const accountingDummy2 = {describe: accounting2.describe}; 
const accountingDummy2 = {name: 'ngm', describe: accounting2.describe}; 

accountingDummy2.describe();
