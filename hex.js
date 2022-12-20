const hexnumber =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector(".btn");
const clr = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexcolor ="#";

    for(let i=0 ; i<6 ;i++){
        random=getrandom();
        hexcolor += hexnumber[random];
    }
//   console.log(hexcolor);

    document.body.style.backgroundColor=hexcolor;
    clr.style.color =hexcolor;
    clr.textContent =hexcolor;
});

function getrandom() {
    return Math.floor(Math.random()*hexnumber.length);
}