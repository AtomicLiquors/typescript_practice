function addAndHandle(n1: number, n2: number, cb: (num:number) => void) {
    const result = n1 + n2;
    cb(result);
}


addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
/**
 * Q. addAndHandle의 세 번째 매개변수는 리턴 타입이 void입니다. 근데 지금 콜백함수에 리턴 타입이 있네요. 근데 컴파일 에러가 안 나요. 이거 버그인가요?
 * A. void 타입의 함수를 매개변수로 선언하면...
 *    타입스크립트가 리턴 타입이 void인 함수만 허용하겠다는 게 아니라, 
 *    콜백 함수가 뭘 반환하든 무시하겠다는 의미입니다.
 */
