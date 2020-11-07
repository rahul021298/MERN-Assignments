function BankAccount(accountNumber, accountHolderName, accountBalance){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;

    getCurrentBalance = function(){
        return accountBalance;
    }
}

var savings = new BankAccount (000,"abc",100000);
savings.isSalary = true;

var current = new BankAccount(001,"bcd",200000);
current.odLimit = 5000;

document.getElementById("balance1").innerHTML = "Savings Balance is: " + savings.accountBalance;
document.getElementById("balance2").innerHTML = "Current Balance is: " + current.accountBalance;

savings.withdraw =function(amount){
    if((this.accountBalance - amount > 0)){
        this.accountBalance -= amount;
        console.log(amount + " Withdrawn");
        document.getElementById("withdraw1").innerHTML = amount + " Withdrawn";
    }else{
        console.log("Balance not sufficient");
        document.getElementById("withdraw1").innerHTML = "Balance not sufficient";
    }
}

current.withdraw =function(amount){
    if((this.accountBalance - amount > 5000)){
        this.accountBalance -= amount;
        document.getElementById("withdraw2").innerHTML = amount + " Withdrawn";
        console.log(amount + " Withdrawn");
    }else{
        document.getElementById("withdraw2").innerHTML = "Balance not sufficient";
        console.log("Balance not sufficient");
    }
}

savings.getCurrentBalance = function(){
return savings.accountBalance;
}

current.getCurrentBalance = function(){
return current.accountBalance;
}

console.log(savings.accountBalance);
savings.withdraw(50000);
 

console.log(current.accountBalance);
current.withdraw(50000);


console.log(savings.getCurrentBalance());
console.log(current.getCurrentBalance());

document.getElementById("savings-balance").innerHTML = "Savings balance after transaction is: " + savings.getCurrentBalance();
document.getElementById("current-balance").innerHTML = "Current balance after transaction is: " + current.getCurrentBalance();