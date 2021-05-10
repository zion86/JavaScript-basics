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