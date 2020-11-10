class Account{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingAccount extends Account{
    constructor(id,name,balance,interest){
        super(id,name,balance);
        this.interest = interest;
    }
}

class CurrentAccount extends Account{
    constructor(id,name,balance,cash_credit){
        super(id,name,balance);
        this.cash_credit = cash_credit;
    }
    
}

const saving = new Account(1,"Rahul",4000,1);
const current = new Account(2,"Makhija",5000,2);
let total = saving.balance + current.balance;
console.log(total);
