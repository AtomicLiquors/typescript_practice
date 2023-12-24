class DataStorageUnion {
    //private data: ( string | number | boolean )[] = [];
    private data: string[] | number[] | boolean[] = [];

    addItem(item: string | number | boolean ){
        this.data.push(item);
    }

    removeItem(item: string | number | boolean ){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}
// 이는 제네릭을 사용했을 때와 결과가 같을 것 같지만, 완전히 다릅니다.
// 배열 속성들의 타입이 문자열 / 숫자 / 불리언 중 하나로 고정된 게 아니라,
// 세 타입이 아무렇게나 섞여 있다고 간주하기 때문입니다.

// 그래서 아래와 같이 코드를 고쳤습니다.
//private data: string[] | number[] | boolean[] = [];

// 이 때도 문제는 addItem 메서드를 사용했을 때, 
// addItem에 들어간 값이 data 배열의 타입과 일치하다고 보장되지 않는다는 것입니다.

/* 어떤 타입을 고를까? */
// 호출할 때마다 타입 중 하나를 활용해 호출하는 유연한 함수를 만든다 -> 유니언
// 특정 타입만 일관되게 사용하는 객체를 만든다 -> 제네릭