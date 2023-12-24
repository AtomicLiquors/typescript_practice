function addCombinables(a: Combinable2, b: Combinable2){
    if(typeof a === 'string' || typeof b === 'string') { // 이렇게 타입 안정성을 지켜주는 코드가 '타입 가드'입니다.
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    // UnknownEmployee타입에 대해 priviliges, startDate를 출력하고 싶습니다.
    // 실제 타입이 Employee인지, Admin인지 불확실하므로 타입 가드가 필요합니다. 

    console.log('Name: ' + emp.name);
    // if( typeof emp === 'Employee') 
    // 커스텀 타입은 사용할 수 없습니다. '런타임에 자바스크립트가 이해할 수 없는 타입이기 때문입니다.'
    
    //if(emp.privileges)
    // 이 방법은 타입스크립트에서 허용하지 않습니다.

    // javascript의 in 연산자를 사용합니다.
    if('priviliges' in emp){
        console.log('Priviliges: ' + emp.priviliges)
    }
    
    if('startDate' in emp){
        console.log('Priviliges: ' + emp.startDate)
    }
}

printEmployeeInformation(e1);


/* 클래스를 대상으로 할 경우 'instanceof'를 사용할 수 있습니다. */
class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    // 속성을 문자열로 표현할 경우 오타가 발생할 수 있습니다.
    //if('loadCargo' in vehicle) { 
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);
