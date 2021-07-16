function createUser(name, age) {
  return {
    name: name,
    age: age,
    isAdmin: false,
    getUserInfo: function () {
      console.log(`My name is ${this.name}, i'm ${this.age} yeasr old.`);
    },
  }
}

const alex = createUser('Alex', 23);    // { name: 'Alex', age: 23, isAdmin: false, getUserInfo: [Function: getUserInfo] }
alex.getUserInfo();                     // 'My name is Alex, i'm 23 yeasr old.'


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