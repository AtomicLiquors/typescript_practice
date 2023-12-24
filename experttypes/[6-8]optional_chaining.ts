const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};

// javascript에서 런타임 에러 방지하기
console.log(fetchedUserData.job && fetchedUserData.job.title);

// typescript optional chaining 연산자로 런타임 에러 방지하기
console.log(fetchedUserData?.job?.title);
