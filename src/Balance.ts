export class Balance {
     private balance:number;
    constructor(startBalance:number) {
        this.balance= startBalance;
    }
   addBalance(x:number){
    x=Math.round(x);
this.balance+=x;
   }
    substractBalance(x:number){
        x=Math.round(x);
this.balance-=x;
   }

    getBalance(){
        return this.balance;
    }
}