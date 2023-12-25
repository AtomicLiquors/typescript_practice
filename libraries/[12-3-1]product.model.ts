import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator'

export class Product {
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }

    getInformation() {
        return [this.title, `$${this.price}`];
    }

    // 에러 발생하는 이유? tsconfig 설정 변경도 안 먹히고, nightly가 깔려있지도 않음.
    /*Unable to resolve signature of property decorator when called as an expression.
    Argument of type 'undefined' is not assignable to parameter of type 'Object'.
    */
}