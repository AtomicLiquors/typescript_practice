function LoggerFactory(logString: string) { 
    // Decorator Factory
    return function(constructor: Function){
        console.log('Logging...');
        console.log(constructor);
    }
}

@LoggerFactory('Logging - Person') 
class Person2 {
    name = 'Max';

    constructor() {
        console.log('Creating Person Object...')
    }
}

const persona2 = new Person2();
console.log(persona2);


function WithTemplate(template: string, hookId: string){
    return function(_: Function){ // "_" : '인자가 들어오긴 하겠지만 필요없어요. 지정은 해야겠지만'
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template;
        }
    }
}

@LoggerFactory('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app') //'app'은 DOM의 id 이름이라고 상정합시다. <div id="app"></div>
class Person3 {
    name = 'Max';

    constructor() {
        console.log('Creating Person Object...')
    }
}
// 우리가 이 코드를 라이브러리로 만들어서 공유한다면,
// 다른 개발자들은 누구나 이 데코레이터 함수를 임포트해 클래스에 추가하고, 콘텐츠를 렌더링하게 만들 수 있습니다.


/* Q. 데코레이터 여러 개를 부착했다면, 뭐가 먼저 실행될까요? */

/* A. 위에서부터 아래입니다. */