/* extends를 이용한 제약조건 */

function restrictedMerge<T extends object, U extends object>(objA: T, objB: U) { 
    return Object.assign(objA, objB); 
}

restrictedMerge({name: 'Max'}, {age: 30});
// restrictedMerge({name: 'Max'}, 30); // 객체가 아닌 매개변수가 U 자리에 왔습니다. 컴파일 에러가 발생합니다. 


// 제약조건을 잘 활용하면 제네릭 활용을 최적화하고, 오류나 오작동을 피할 수 있습니다.