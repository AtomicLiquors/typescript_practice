const personWithHobbies = {
    name: 'Max',
    age: 30,
    hobbies: []
}
// 배열에 아무것도 넣지 않으니까 타입 추론은 never[]가 뜨는데...?

/* 배열을 순회할 때 */
for(const hobby of personWithHobbies.hobbies){
    console.log(hobby);
}