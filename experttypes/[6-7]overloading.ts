

type CombinableOL = string | number;
type NumericOL = number | boolean;

type UniversalOL = CombinableOL & NumericOL;

function add(a: CombinableOL, b: CombinableOL){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add(1, 5);
const resultStringCombination = add('Max', ' Manu') as string;
resultStringCombination.split(' ');

// resultStringCombination이 문자열이란 것이 보장되어야,
// .split에서 컴파일 에러가 발생하지 않습니다.


/* add를 오버로딩하기 */
function add(a: number, b: number): number;
function add(a: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
const resultOverloadedMethod = add('Max', ' Manu');
resultOverloadedMethod.split(' ');
// 예제대로 한 것 같은데 컴파일 에러가 뜬다. 
// Property 'split' does not exist on type 'string | number'.
