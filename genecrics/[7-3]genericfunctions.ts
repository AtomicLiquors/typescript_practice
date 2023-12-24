interface Lengthy {
    length: number;
}

/* 제네릭 함수 */
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value";
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
//console.log(countAndDescribe(10)); 숫자는 length 속성이 없으므로 무효입니다.