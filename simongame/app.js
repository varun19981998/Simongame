let gameseq=[];
let userseq=[];
let started =false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){

  if(started==false){
    console.log("Game is started");
    started=true;
    levelUp();
  }

 

});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");},250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");},250);
}

function levelUp(){
  userseq=[];
  level++; 
  h2.innerText=`Level ${level}`;
  let rabdidx=Math.floor(Math.random()*3);
  let randcolor=btns[rabdidx];
  let randbtn=document.querySelector(`.${randcolor}`);
  // console.log(rabdidx);
  // console.log(randcolor);
  // console.log(randbtn);
  gameseq.push(randcolor);
  console.log(gameseq)
  gameFlash(randbtn);

}
function checkans(idx){
  console.log("Cuur level",level);
  let idx=level-1;
  if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq
      .length
    ){
      setTimeout(levelUp,1000);
    }
    
  }
  else{
    h2.innerHTML=`Game over Your score was <b>${level} </b><br>! Press any key to start`;
    reset();
  }

}
function btnPress(){
 
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
  userseq.push(userColor);
  checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
  btn.addEventListener("click",btnPress);
}
function reset(){
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
}