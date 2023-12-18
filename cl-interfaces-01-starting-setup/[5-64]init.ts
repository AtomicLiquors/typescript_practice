
class Department_After {

    private employees: string[] = []; 

    constructor(private id: string, public name: string){
            
    }
    // 매개변수가 지정된 생성자를 이용해
    // 필드 선언, this.xx = xx 모두 지워버리고 클래스 명세를 축약할 수 있다.
    // 생성자에 값을 넣어 줄 필드는 public으로 선언한다.

    describe(this: Department_After){
        console.log(`Departemnt (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting_after = new Department_After('d1', 'Accounting');




class Department_Before {

    private id: string;
    private name: string;
    private employees: string[] = []; 

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    describe(this: Department_Before) {
        console.log('Departemnt: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
