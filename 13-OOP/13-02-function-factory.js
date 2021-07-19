// create static property
let userId = 0;

// create static method
const showUserId = function () {
  console.log(`${this.name} has id: ${this.id}`);
};

// function-factory
function createUser(name, age) {
  return {
    id: ++userId,
    name: name,
    age: age,
    isAdmin: false,
    getUserInfo: function () {
      console.log(`My name is ${this.name}, i'm ${this.age} yeasr old.`);
    },
    showId: showUserId,
  }
}


const alex = createUser('Alex', 23);    // { id: 1, name: "Alex", age: 23, isAdmin: false, getUserInfo: ƒ }
alex.getUserInfo();                     // 'My name is Alex, i'm 23 yeasr old.'
alex.showId();                          // 'Alex has id: 1'

const john = createUser('John', 18);    // { id: 2, name: "John", age: 18, isAdmin: false, getUserInfo: ƒ }
john.getUserInfo();                     // 'My name is John, i'm 18 yeasr old.
john.showId();                          // 'John has id: 2'



/*
  const createAccount = (initBalance) => {
    let balance = initBalance + 10;

    return {
      deposite: amount => balance += amount,
      withdraw: amount => {
        if (balance >= amount) balance -= amount;
      },
      getBalance: () => console.log(balance),
    };
  };

  const alexSallary = createAccount(1000);
  alexSallary.getBalance();                   // 1010
  alexSallary.deposite(40);
  alexSallary.getBalance();                   // 1050
  alexSallary.withdraw(950);
  alexSallary.getBalance();                   // 100
*/