let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user_score");
let compScorePara=document.querySelector("#comp_score");

const drawGame=()=>{
    msg.innerText="Game was draw.Play Again!";
    msg.style.backgroundColor="rgb(25, 25, 29)";

}

const showWinner=(userWin,user_choice,comp_choice)=>{
    if(userWin){
        user_score++;
        userScorePara.innerText=user_score;
        msg.innerText=`You win. Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }else{
        comp_score++;
        compScorePara.innerText=comp_score;
        msg.innerText=`You lost. ${comp_choice} beats your ${user_choice}`;
        msg.style.backgroundColor="red";
    }
}
const genCompChoice = () => {
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const playGame= (user_choice)=>{
    console.log("user choice is ",user_choice);
    const comp_choice=genCompChoice();
    console.log("comp choice is ",comp_choice);
    

    if(user_choice===comp_choice){
        drawGame();
    }else{
        let userWin=true;
        if(user_choice==="rock"){
            userWin=comp_choice==="paper"?false:true;
        }else if(user_choice==="paper"){
            userWin=comp_choice==="scissors"?false:true;
        }else{
            userWin=comp_choice==="paper"?true:false;
        }
        showWinner(userWin,user_choice,comp_choice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice=choice.getAttribute("id");
        playGame(user_choice);
    });
});