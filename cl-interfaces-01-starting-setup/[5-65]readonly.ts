
class Department_Readonly {

    private employees: string[] = []; 

    constructor(private readonly id: string, public name: string){
        // 매개변수 옆에 readonly 키워드 부착
    }
    
    describe(this: Department_Readonly){
        console.log(`Departemnt (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
       // this.id = 'd2'; readonly가 붙으면 임의로 변경할 수 없게 된다.
       // 객체를 만들다 보면 자주 사용하게 될 기능.
        this.employees.push(employee);
    }

}