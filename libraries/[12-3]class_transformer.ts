import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { Product } from "./[12-3-1]product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 19.99 },
];
//const p1 = new Product("A Book", 12.99);

const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts){
    console.log(prod.getInformation());
}
// 이름없는 바닐라 자바스크립트 객체 하나를 특정한 생성자 함수 인스턴스로 바꾸는 작업. 직접 하기는 번거롭습니다.

const loadedProducts2 = plainToClass(Product, products);
// 이 코드는 구형(deprecated).


// 타입스크립트에서 잘 동작하는 패키지.
// 단 타입스크립트 전용 기능을 사용하는 건 아니고 바닐라에서도 잘 동작한다.