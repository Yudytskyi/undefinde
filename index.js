"use strict";
//
// const arr = [10, 20, 30, 40, 50, 60, 70];
//
// arr.forEach((item) => console.log(`${item} * ${item} = ${item*item}`));

function User(name = '', surname = '', age = 0) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
}

const userProto = new User()

User.prototype = userProto;

userProto.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`
}

const users = [];

for (let i = 0; i < 100; i++) {
    const newUser = new User(`Name${i}`, `Surname${i}`, 4+i);
    users.push(newUser);
}
;

const fullUsersName = users.map(function (user) {...});

const adultUsers   = users.filter(function (user) {
return user.age>17;
})

console.table(fullUsersName);

