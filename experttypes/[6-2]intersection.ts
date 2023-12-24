type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

/* 두 타입을 선언하고, 조합하기 */
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}
// 객체 타입을 교차한 경우 : 객체 속성을 모두 조합합니다.
// 이건 인터페이스 상속하고도 비슷합니다.


/* 유니언 타입 조합하기 */
type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;
// 유니언 타입을 교차한 경우 : 공통으로 해당되는 타입만을 가져옵니다.
// 결과적으로 Universal의 타입은 "number"가 됩니다. 유일하게 교차하는 게 숫자니까요.