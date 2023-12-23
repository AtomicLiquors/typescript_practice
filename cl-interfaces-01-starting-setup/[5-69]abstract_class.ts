/* 추상 클래스 */

abstract class AbstractDept {

    private id: string;
    private name: string;
    private employees: string[] = []; 

    constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    // 정보를 출력하는 'describe' 메서드를 추상 메서드로 정의해 봅시다.
    abstract describe(this: AbstractDept): void; // 리턴 타입은 반드시 명시해 주어야 합니다.

    /*
    abstract describe(this: AbstractDept) {
       
    }
    구현부 {} 를 달면 에러가 뜹니다.
    */

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class AbstAccountingDepartment extends AbstractDept {

    /* 이제 자식 클래스에서는 상속받은 추상 메서드를 구현하지 않으면 컴파일 에러가 발생합니다. */
    describe(this: AbstractDept): void {
        throw new Error("Method not implemented.");
    }

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

