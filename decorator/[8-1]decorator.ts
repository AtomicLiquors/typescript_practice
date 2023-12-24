/* 데코레이터는 '메타프로그래밍'에 유용한 기능입니다. */
// 페이지에 방문한 사용자가 아니라, 다른 개발자들이 코드 작성을 더 편하게 만들어주는 기능입니다.
// 클래스 , 메서드가 올바르게 사용되었는지 확인하거나, 내부 변환 로직 등등...

// tsconfig.json에서 "experimentalDecorators: true"를 추가해 주세요.
// 관련 에러 : https://blog.ddark.kr/Experimental-support-for-decorators-is-a-feature-that-is-subject-to-change-in-a-future-release/
// 강의하고는 다르게 'legacy'라는데 그럼 이제 사용 안 하는 건가?

// 데코레이터는 함수의 일종으로, 클래스에 추가됩니다.
// 첫 글자를 대문자로 하는 게 관례입니다.


function Logger(constructor: Function) { // 데코레이터는 하나 이상의 매개변수를 가져야 합니다.
    console.log('Logging...');
}

@Logger // 함수를 데코레이터로 간주하고 클래스에 적용합니다. 
// 데코레이터는 '객체가 생성될 때'가 아닌 '클래스가 정의된 코드를 해석할 때' 실행됩니다.
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating Person Object...')
    }
}

const persona = new Person();
console.log(persona);
