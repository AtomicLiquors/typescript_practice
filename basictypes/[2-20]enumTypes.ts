/* 타입스크립트에서 추가된 타입 */

enum Role { ADMIN, READ_ONLY, AUTHOR };
// 지금 선언하는 Role은 '사용자 타입'의 일종이기도 하다.

enum RoleWithValue { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = "AUTH"};
// Enum의 항목마다 원하는 값을 지정해줄 수도 있다.

const personWithEnum = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}
