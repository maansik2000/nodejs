const readline = require('readline');
const r1 = readline.createInterface({input : process.stdin,
                                    output : process.stdout}) ;
                                    
let num1 = Math.floor((Math.random()*10)+ 1);
let num2 = Math.floor((Math.random()*10)+ 1);

let ans = num1 + num2;

r1.question(`what is the ${num1} + ${num2}??`,
    (user) => {
    if(user == ans){
        r1.close();
    }else{
        r1.setPrompt('wrong answer\n');
        r1.prompt();
        r1.on('line',(user)=> {
            if(user.trim() == ans){
                r1.close();
            }else{
                r1.setPrompt("Wrong answer enter again\n");
                r1.prompt();
            }
        })
    }
});

r1.on('close',() => {
    console.log('you got the correct answer\n');
})