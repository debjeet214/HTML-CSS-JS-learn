class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static compareage(user1, user2){
        return user1.age - user2.age;
    }
}

const user1 = new User('debjeet ghosh', 19)
const user2 = new User('Mitali Rath', 2)
const user3 = new User('Dip Roy', 17)

const users = [user1, user2, user3];
users.sort(User.compareage);
console.log(users)
