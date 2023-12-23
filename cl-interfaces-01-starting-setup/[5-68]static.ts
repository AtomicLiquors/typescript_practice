/* static은 바닐라 ES6 자바스크립트에서도 지원합니다. */
/* 새 인스턴스를 생성하지 않고도 호출할 수 있는 메서드. */

class StaticDept {

    static fiscalYear = 2020;

    private id: string;
    private name: string;
    private employees: string[] = []; 

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    describe(this: StaticDept) {
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

class StatucAccountingDept extends StaticDept {

    private lastReport : string;

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    get mostRecentReport() {
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

/* 스태틱 메서드 사용 예시 */
const employee1 = StaticDept.createEmployee('Max');
console.log(employee1, StaticDept.fiscalYear);