const nameGamer = document.querySelector(".btn-Primary");
const namePlayer = document.querySelector("#namePlayer");

const btnStr = document.querySelector(".btnStr");
const btnDex = document.querySelector(".btnDex");
const btnDef = document.querySelector(".btnDef");
const btnXp = document.querySelector(".btnXp");
const btnLvl = document.querySelector("#btnLvl");

const name = document.querySelector("#name");
const maxXp = document.querySelector("#maxXp");

const freePoints = document.querySelector("#freePoints");
nameGamer.addEventListener("click",()=>{
    console.log(namePlayer.value);
    sessionStorage.setItem("namePlayer",namePlayer.value);
});

btnStr.addEventListener("click",(event)=>{
    
    console.log(event.target);
});

btnDex.addEventListener("click",(event)=>{
    
    console.log(event.target);
});
btnDef.addEventListener("click",(event)=>{
    
    console.log(event.target);
});

btnXp.addEventListener("click",(event)=>{
    
    console.log(event.target);
});

