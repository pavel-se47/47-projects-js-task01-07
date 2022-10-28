const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactions.length + 1,
      type,
      amount,
    };
    return newTransaction;
  },

  deposit(amount) {
    if (Transaction.DEPOSIT === 'deposit') {
      this.balance += amount;
      this.transactions.push(this.createTransaction(amount, 'deposit'));
    }
  },

  withdraw(amount) {
    if (Transaction.WITHDRAW === 'withdraw') {
      if (amount > this.balance) {
        return console.log(
          'Cнятие такой суммы невозможно, недостаточно средств!'
        );
      }
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Ошибка! Операция с указанным номером ID не найдена!';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

// account.deposit(470);

// account.deposit(30);

// account.withdraw(100);

// account.withdraw(50);

// console.log(account.transactions);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(3));

// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));
