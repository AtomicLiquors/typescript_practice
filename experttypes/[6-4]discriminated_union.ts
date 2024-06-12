/* 유니언 타입을 대상으로 타입 가드를 구현할 때 */

interface Bird {
    type: 'bird'; 
    // 리터럴 타입 할당.
    // 아래 moveAnimal에서 타입 가드를 작성해 줄 건데, 
    // 클래스가 아닌 인터페이스기 때문에 instanceof를 사용할 수 없습니다. 
    // *(인터페이스는 런타임에 생성자를 호출할 수 없습니다.)*
    // 타입 가드 코드에서 문자열 비교로 판단하는 것보다 리터럴 타입을 미리 넣어주는 게 더 좋습니다.
    // IDE가 리터럴 타입을 인식하고 자동 완성이 가능하기 때문에 더 정확한 코딩이 가능합니다.
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){

    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
