다음 TypeScript 코드에서 getProperty 함수는 객체와 키를 받아 해당 프로퍼티 값을 반환하는 함수입니다.   
아래 보기 중 personName은 string, personAge는 number 타입으로 정확히 추론될 수 있도록 GetProperty 타입을 정의한 것을 고르십시오.

```ts
type GetProperty = ? // GetProperty를 정의해주세요
const getProperty: GetProperty = (obj, key) => obj[key];

const person = { name: '익명', age: 30 };

const personName: string = getProperty(person, 'name');
const personAge: number = getProperty(person, 'age');
```

1. type GetProperty = <T>(obj: T, key: string) => T[typeof key]
2. type GetProperty = (obj: Object, key: string) => obj[typeof key]
3. type GetProperty = <T, K extends keyof T>(obj: T, key: K) => T[K]
4. type GetProperty = (obj: Record<string, any>, key: keyof typeof obj) => typeof obj[key]
5. type GetProperty = (obj: any, key: string) => obj[string]

---

### ✅ 정답
3번 — type GetProperty = <T, K extends keyof T>(obj: T, key: K) => T[K]

getProperty 함수는 주어진 객체와 키를 이용하여 해당 프로퍼티의 값을 반환합니다.  
이때 반환값의 타입이 객체의 해당 키에 대한 정확한 타입으로 추론되어야 합니다.

타입 파라미터 T는 객체의 타입을, K는 T의 키 중 하나(keyof T)로 제한함으로써,   
T[K]를 통해 해당 프로퍼티의 타입을 정확히 추론할 수 있습니다.   
따라서 getProperty(person, 'name')은 string, getProperty(person, 'age')는 number로 타입이 정확히 추론됩니다.    
  
보기 분석
①번: T[typeof key]는 key가 string 타입이기 때문에 결국 T[string]이 되어, 객체에 인덱스 시그니처가 없으면 오류가 발생합니다. ❌  
②번: 제네릭이 없고 obj 타입이 Object로 제한되어 있어 타입 추론이 불가능합니다. 또한 obj[typeof key] 역시 obj[string]과 같아 부정확합니다. ❌  
③번: key를 T의 키 중 하나로 제한하며, T[K]를 반환하여 정확한 타입 추론이 가능합니다. ✅  
④번: typeof obj는 타입 문맥이 아닌 값 문맥에서 사용되어 문법 오류가 발생합니다. ❌  
⑤번: obj[string]은 모든 문자열 키에 대해 같은 타입으로 처리되므로, 특정 키의 타입을 구분할 수 없습니다. ❌
