class SingletonDept {

    private id: string;
    private name: string;
    private employees: string[] = []; 

    private static instance: SingletonDept;

    /* 생성자를 private으로 선언합니다. */
    private constructor(id: string, n: string){
        this.id = id;
        this.name = n;
    }

    /* 메서드 이름은 맘대로 지으면 됩니다. */
    static getInsatnce(){
        if(this.instance){ //또는 SingletonDept.instance
            return this.instance;
        }
        this.instance = new SingletonDept('d2', 'Accounting');
        return this.instance;
    }


    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const singletonDept = SingletonDept.getInsatnce();
const singletonDept2 = SingletonDept.getInsatnce();
// singletonDept와 singletonDept2는 같은 인스턴스를 가리키게 됩니다.
