import inquirer from "inquirer"

const mypin:number = 7878
let mybalance:number = 20000

const answer = await inquirer.prompt(
        [
            {
                name: "MyPIN",
                type: "number",
                message: "Enter your Pin code"
            }
        ]
    )

    if(mypin == answer.MyPIN){
        console.log("Correct Pin!")
    }else{
        console.log("Your Pin is incorrect")
    }
console.log(answer)

const Cash_answer = await inquirer.prompt(
        [
            {
                name:"Available_balance",
                type:"list",
                message:"Select the option",
                choices: ["Cash_Withdraw",  "Deposit", "Check_Balance"] 
            }
        ]
    )
        console.group(Cash_answer)
if(Cash_answer.Available_balance === "Cash_Withdraw"){
        let amountanswer = await inquirer.prompt(
        [   {
                name:"Amount",
                type:"number",
                message:"Enter Your Amount"
            }
        ]
    )

    mybalance -= amountanswer.Amount
if(amountanswer.Amount > mybalance){
        console.log("You do not have enough money")
    }

    console.log("Your Remaining Balance is " + mybalance)
    }else if( Cash_answer.Available_balance === "Check_Balance"){
        console.log("Your available balance is " + mybalance)
    
    }

if(Cash_answer.Available_balance === "Deposit"){
    let moneydeposit = await inquirer.prompt(
        [
            {
                name:"Deposited_Money",
                type:"number",
                message: "Money you want to deposit"

            }
        ]
    )
    mybalance += moneydeposit.Deposited_Money
    console.log("Money deposited Successfully")
    console.log("Your available balance is " + mybalance)    
}









