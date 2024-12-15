let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newgamebtn=document.querySelector("#new-btn")
let msgcontianer=document.querySelector(".msg-contianer")
let msg=document.querySelector("#msg")

let turno= true; //palyerx playero 
count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turno= true;
    count=0;
    enableboxes();
    msgcontianer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was Clicked!")
        if(turno){//Playero
            box.innerText="O";
            turno=false;
        }
        else{//palyerx
            box.innerText="X";
            turno=true;
        }
        box.disabled= true;
        count++;
        let isWinner=checkwinner(); 
        if(count==9 && !isWinner){
            drawgame();
        }
    });
});
const drawgame=()=>{
    msg.innerText=`Game Was Draw`;
    msgcontianer.classList.remove("hide");
    diableboxes();
}
const diableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner =(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontianer.classList.remove("hide")
    diableboxes();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        //  console.log(pattern[0],pattern[1],pattern[2])
        //  console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
            let pos1valu=boxes[pattern[0]].innerText;
            let pos2valu=boxes[pattern[1]].innerText;
            let pos3valu=boxes[pattern[2]].innerText;
            if(pos1valu !=""&& pos2valu !=""&& pos3valu!=""){
                if(pos1valu==pos2valu && pos2valu==pos3valu){
                    // console.log("winner",pos1valu)
                    showwinner(pos1valu);
                    return true;
                }
            } 
    }
       
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)