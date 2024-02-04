class User {
    static cache = {
        1: 'some value',
    };

    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }

    // checkCache() {}

    static {
        console.log('Initialized');
    }

    static hasInCache() {
        console.log(User.cache);
    }
}
User.hasInCache();
User.hasInCache();
