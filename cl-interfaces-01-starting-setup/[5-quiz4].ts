/* 다음 코드를 줄여보세요. */
class Product_Before {
    title: string;
    price: number;
    private isListed: boolean;

    constructor(name: string, pr: number){
        this.title = name;
        this.price = pr;
        this.isListed = true;
    }
}


/* 모범답안 */
class Product_After {

    private isListed: boolean;

    constructor(name: string, pr: number){
        this.isListed = true;
    }
}

