// [12-3-1]로.

import { Product } from './[12-3-1]product.model'

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if(errors.length > 0){
        console.log('VALIDATION ERROS!')
        console.log(errors);
    }
    console.log(newProd.getInformation());
})

// "기본 규칙이 전부 구현된, 강력한 유효성 검사를 사용할 수 있다."
// 타입스크립트 기반 대규모 프로젝트에서 필수!
