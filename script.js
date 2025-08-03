let boxsis = document.querySelectorAll(".box");
let greet = document.querySelector(".greet");
let btn = document.querySelector(".newbtn");

let turnO = true;

let winnerArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3,4,5],
    [6,7,8]
]

boxsis.forEach((box) => {
    box.addEventListener("click", () => {

        if (box.innerText !== "") {
            return;
        }
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        winner();
        
        
    })
})

function draw() {
            greet.innerText = `This Game was Draw, please start New game.`;
                dissable();
                greet.classList.remove("hide");
                btn.classList.remove("hide");
}

let dissable = () =>{
    for(let box of boxsis){
        box.disabled = true;
    }
}

let enable = () =>{
    for(let box of boxsis){
        box.innerText = "";
        box.disabled = false;
    }
}
let reset = () => {
    turnO = true;
    
    greet.classList.add("hide");
    btn.classList.add("hide");
    enable();

}

let winner = () => {
    for (let pattern of winnerArr) {
        let pos1 = boxsis[pattern[0]].innerText;
        let pos2 = boxsis[pattern[1]].innerText;
        let pos3 = boxsis[pattern[2]].innerText;
        if(pos1 !== ""&& pos2 !== "" && pos3 !== ""){
            if(pos1 == pos2 && pos2 == pos3){
                greet.innerText = `The Winner is player: ${pos1}`;
                dissable();
                greet.classList.remove("hide");
                btn.classList.remove("hide");
            }
            
            

        }
    }
    let isdraw = true;
    for(let box of boxsis){
        if(box.innerText === ""){
            isdraw = false;
        break;
    }
}
    if(isdraw){
        draw();
    }
    
}

btn.addEventListener("click", reset);




