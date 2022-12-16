let text = document.getElementById("inputext");

let calculate=(number)=>{
    text.value += number;
}

let result=()=>{
    text.value = eval(text.value);
}

function clr(){
    text.value = "";
}

function del(){
    text.value = text.value.slice(0,-1);
}