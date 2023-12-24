
// 입력값에 대해 메시지를 지정해 주고 싶습니다.
// 유연한 코드를 작성하고 싶기 때문에, 어떤 속성들이 이 안에 있을지 미리 상정하지 않은 상황입니다.
interface ErrorContainer {
    [prop: string]: string;
    // 인덱스 타입 선언 : []를 이용합니다.
    // "속성 이름도 모르겠고, 속성이 몇 개인지도 모르겠지만, 여기 추가되는 속성은 반드시 문자열로 된 이름을 갖고, 문자열 값을 간는다."
    
    /* 기본값을 지정할 수 있지만, 선언한 인덱스 타입에 어긋나면 안 됩니다. */
    id: string;
    //num: number;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must be in a valid format!',
    1: 'Not a valid 1!', // key에 숫자를 넣었습니다. 이 경우 지정한 인덱스 타입에 따라 숫자 1이 아닌 문자열 "1"로 인식이 됩니다.
    
    id: 'id'
}

