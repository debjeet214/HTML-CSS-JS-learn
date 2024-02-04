class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const user1 = new User('debjeet ghosh', 19)
const user2 = new User('Mitali Rath', 20)
const user3 = new User('Dip Roy', 17)

const users = [user1, user2, user3];
users.sort((a,b)=> a.age - b.age)
console.log(users)
