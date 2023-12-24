class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();


/* 문제 : DataStorage에 객체 타입을 저장한 경우 removeItem은 예상대로 작동하지 않을 겁니다. 왜? */
const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Max'});
objStorage.addItem({name: 'Manu'});

objStorage.removeItem({name: 'Manu'});
console.log(objStorage.getItems());


/* 강의 참조 */
/* 아무것도 찾지 못한 indexOf는 -1을 반환합니다. */
/* 따라서 배열의 마지막 항목이 삭제됩니다. */

/* 이를 방지하려면 removeItem에 다음 로직을 넣어줘야 합니다.*/
// if ( this.data.indexOf(item) === -1 ) return;

/* 또는 DataStorage가 기본형 타입만 받도록 제약조건을 걸어주는 편이 낫습니다. */
// class DataStorage<T extends string | number | boolean