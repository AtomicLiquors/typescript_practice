interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

/* Partial 타입 활용 */
// 타입스크립트 내장 타입으로, 타입 내부의 속성을 전부 Optional로 바꿔줍니다.
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}


/* Readonly 타입 */
// 기본형 타입은 const를 이용해서 상수로 선언하고, 값 변화를 막을 수 있습니다.
// Readonly를 이용하면 배열, 객체도 속성을 바꾸거나 추가하지 못하게 만듭니다.

const namesArr: Readonly<string[]> = ['Max', 'Anna'];
// Readonly 배열에 대해 push, pop을 사용할 수 없습니다.
// namesArr.push('Manu');
// namesArr.pop();

// 위와 같은 유틸리티 타입들은 모두 제네릭입니다. 
// 온갖 타입의 값을 가져와서 작업을 수행하기 때문입니다.
// 배열이든 객체든, 문자열 배열이든 숫자 배열이든.