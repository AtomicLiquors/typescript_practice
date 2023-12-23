/* Getter와 Setter는 바닐라 자바스크립트에서도 지원합니다. */

class Dept {

    private id: string;
    private name: string;
    private employees: string[] = []; 

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    describe(this: Dept) {
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

class AccountingDepartment extends Dept {

    private lastReport : string;

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
    }


    /* getter 작성 : get 키워드를 사용하며, 메서드 명은 의미만 드러나게 작성해 줍니다. */
    get mostRecentReport() {

        /* getter 내부에 필요한 로직을 정의할 수 있습니다. */
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }


    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

}


const accountingDept = new AccountingDepartment('d2', []);
accountingDept.addEmployee('Max');
console.log(accountingDept.mostRecentReport);
/* 메서드를 호출하듯 ()를 쓰지 않는다. 프로퍼티에 접근하듯 이름만 적는다. */

