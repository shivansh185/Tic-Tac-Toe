let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#bottom");
let newBtn =document.querySelector("#start");
let para =document.querySelector("#msg");
let msgbox =document.querySelector(".hide");
let eset =document.querySelector("#reset");



player1=true;//playerX,playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (player1===true) {
            box.innerText="O"
            player1=false;
        } else {
            box.innerText="X";
            player1=true;
        }
        box.disabled=true;
        checkwinner();
    })
    
});
const reset = ()=>{
    player1=true;
    enable();
    msgbox.classList.add("hide");

}
const disable=()=>{
    for (let box of boxes) {
        box.disabled=true;
        
    }
}
const enable=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner = (winner) =>{
    para.innerText=`congrulation winner is ${winner} `;
    msgbox.classList.remove("hide");
    disable();

}




const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner",pos1);
                showwinner(pos1);
                
            }
        }
    }
};
newBtn.addEventListener("click",reset);
eset.addEventListener("click",reset);