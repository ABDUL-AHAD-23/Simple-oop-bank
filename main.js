"use strict";
class bankaccount {
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit sucessfully get into new account and your balance is:" + this.accountbalance);
        }
        else {
            console.log("Credit unsucessfull");
        }
    }
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit successfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("Debit unsucessfull");
        }
    }
}
class Customer {
    constructor(person, age, gender, mobileNumber, bankAccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    display() {
        console.log("Name: " + this.person.firstname + "" + this.person.lastname);
        console.log("Agr: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile-number: " + this.mobileNumber);
        console.log("Amount in bank: " + this.bankAccount.accountbalance);
        console.log();
    }
}
const a1 = new bankaccount(50000);
const c1 = new Customer({ firstname: "Abdul", lastname: "Ahad" }, 16, "male", 223987, a1);
c1.display();
c1.bankAccount.debit(3000);
console.log();
const a2 = new bankaccount(50000);
const c2 = new Customer({ firstname: "Muhmmad", lastname: "Hanif" }, 16, "male", 223987, a2);
c2.display();
c2.bankAccount.debit(6000);
console.log();
