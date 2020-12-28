let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//Evento click nos boxes
for(let i = 0; i < boxes.length; i++){
    //Quando for clicado no box
    boxes[i].addEventListener("click", function(){
        let el = checkEl(player1, player2);

        //valida se já foi computada jogada
        if(this.childNodes.length === 0){
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            //computar jogadas
            if(player1 == player2){
                player1++;
            } else{
                player2++;
            }
        }

    });
}

//valida quem irá jogar
function checkEl(player1, player2){
    if(player1 == player2){
        el = x;
    } else{
        el = o;
    }

    return el;
}