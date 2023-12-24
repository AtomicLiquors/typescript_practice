/*
function extractAndConvert(obj: object, key: string){
    return 'Value : ' + obj[key]; 
    // 이것만 가지곤 obj에 반드시 key가 들어있을 지 알 수 없습니다. return문에서 컴파일 에러가 발생합니다.
}*/

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    // U가 반드시 object의 key임을 보장합니다.
    return 'Value : ' + obj[key]; 
}

extractAndConvert({ name: 'Max' }, 'name');