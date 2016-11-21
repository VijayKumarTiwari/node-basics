//account object def
var account = {
	balance: 0
};

//deposit
function deposit(account, amount){
	account.balance += amount;
	return getBalance(amount);
}

//withdraw
function withdraw(account, amount){
	account.balance -= amount;
	return getBalance(amount);
}

//getBalance
function getBalance(amount){
	return amount.balance;
}

console.log("start bank acc...");
console.log("current balance ="+getBalance(account));
deposit(account, 100);
console.log("balance after deposit of 100 ="+getBalance(account));
withdraw(account, 20);
console.log("balance after withdraw of 20 ="+getBalance(account));
console.log("end bank acc...");