class Department3 {

    private name: string;
    private employees: string[] = []; 
    // 빈 배열로 초기화
    // 아무나 직접 employees 배열을 수정하지 못하도록 캡슐화가 필요합니다.
    // 객체 필드를 바꾸는 메서드를 캡슐화해야 될 이유 중 하나는 '검증 로직'을 거쳐야 된다는 겁니다.
    // 자바스크립트는 모두 'public'입니다. 컴파일할 때만 빨간줄 뜨지, 런타임 중에는 다 public입니다.

    constructor(n: string){
        this.name = n;
    }

    describe(this: Department3) {
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

const accounting3 = new Department3('Accounting');

accounting3.addEmployee('Max');
accounting3.addEmployee('Manu');
// accounting3.employees[2] = "anna"; -> 불허

accounting3.describe();
accounting3.printEmployeeInfo();



