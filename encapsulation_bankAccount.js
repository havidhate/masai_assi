function createBankAccount(){
    let balance = prompt('Enter initial balance: ');
    return {
        deposit: function(amount){
            balance += amount;
        },
        withdraw: function(amount){
            if(balance >= amount){
                balance -= amount;
                return amount;
            }
            return 'Insufficient funds';
        }
    }
}
createBankAccount();