27. 객관식

TypeScript - Union/Intersection type

아래 TypeScript 코드에서 선언된 각 타입에 대한 "틀린" 설명을 고르세요.

```ts
type Foo = string | number;
type Bar = string & number;
type Baz = { name: string } & { name: number };
type Qux = { name: string } | { name: number };
```

1. Bar 타입은 any로 평가된다.
2. Baz 타입의 객체가 가진 name 속성은 never로 평가된다.
3. Foo 타입의 값에는 1, '1' 모두 할당이 가능하다.
4. Qux 타입의 객체가 가진 name 속성은 string | number로 평가된다.
5. Baz 타입과 Qux 타입은 서로 다른 타입으로 평가된다.

✅ 정답: 4번
✅ 해설
문제에서 주어진 타입 정의는 TypeScript의 유니언(union)과 인터섹션(intersection) 타입의 개념을 묻고 있다.

ts
복사
편집
type Foo = string | number;
→ Foo는 string 또는 number 타입을 가질 수 있는 유니언 타입이다. 즉, 1, '1' 모두 할당 가능하므로 3번 설명은 참이다.

ts
복사
편집
type Bar = string & number;
→ Bar는 string과 number를 동시에 만족해야 하는 인터섹션 타입이다. 이는 실제로 존재할 수 없는 타입이므로 **never**로 평가된다. 따라서 1번 설명은 틀리고, 2번 설명은 참이다.

ts
복사
편집
type Baz = { name: string } & { name: number };
→ Baz는 name 속성이 string이면서 동시에 number여야 하므로, 충돌이 발생하여 name 속성은 never로 평가된다. 따라서 2번 설명은 참이다.

ts
복사
편집
type Qux = { name: string } | { name: number };
→ Qux는 name 속성이 string이거나 number인 두 객체 타입의 유니언이다. 그러나 이 유니언을 가진 객체에서 name 속성은 직접적으로 string | number로 추론되지 않는다. 타입 가드가 없이는 name의 타입을 알 수 없으며, 유니언 타입의 객체의 공통 속성을 직접 사용할 수 없다. 따라서 Qux.name은 string | number로 바로 평가되지 않으므로 4번 설명은 틀리다.

마지막으로,

ts
복사
편집
Baz ≠ Qux
→ 하나는 인터섹션, 하나는 유니언 타입이므로 완전히 다르다. 따라서 5번 설명은 참이다.

✅ 결론
틀린 설명을 묻고 있으며, 틀린 설명은 4번이다.

정답: ④ Qux 타입의 객체가 가진 name 속성은 string | number로 평가된다. ⟶ 틀린 설명 ✅
