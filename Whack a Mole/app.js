let currMole;
let currplant;
let gameOver=false;
window.onload=function(){
    setGame();
}

function setGame(){

    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,2000);
    setInterval(setPlant,2000);
}

function getRandom(){
    return (Math.floor(Math.random()*9)).toString();
}

function setMole(){
    if(gameOver)return;
    if(currMole){
        currMole.innerHTML="";
    }

    let mole=document.createElement("img");
    mole.src="monty-mole.png"
    let num=getRandom();
    if(currplant && currplant.id===num){
        return;
    }
    currMole=document.getElementById(num);
    currMole.appendChild(mole);

}
function setPlant(){
    if(gameOver)return ;
    if(currplant){
        currplant.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="piranha-plant.png";
    let num=getRandom();
    if(currMole && currMole.id===num){
        return;
    }
    currplant=document.getElementById(num);
    currplant.appendChild(mole);

}

let score=0;

function selectTile(){
    if(gameOver){
        return;
    }
    if(this===currMole){
        score+=10;
        document.getElementById("score").innerText="Your score is : "+score.toString();
    }else if(this===currplant){
        document.getElementById("score").innerText="Game Over : "+score.toString();
        gameOver=true;
    }
}