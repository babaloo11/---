let secretnumber = getrandom(1, 10);
let popit = 3;



document.querySelector(".check").onclick = function () {
    let usernumber = document.querySelector(".number").value;
    console.log(usernumber, secretnumber);

    if (usernumber > secretnumber) {
        console.log("секретное число меньше");
        document.querySelector(".podskaz").innerHTML = "секретное число меньше";
    }
    if (usernumber < secretnumber) {
        console.log("секретное число больше");
        document.querySelector(".podskaz").innerHTML = "секретное число больше";
    }
    if (usernumber == secretnumber) {
        console.log("Ты угадал!");
        document.querySelector(".podskaz").innerHTML = "чел,супермега харош,ты угадал!";

    }
    popit = popit - 1;
    document.querySelector(".popit").innerHTML = popit;
    if (popit == 0) {
        document.querySelector(".number").disabled=true;
        document.querySelector(".check").disabled=true;
        document.querySelector(".podskaz").innerHTML = "Учись играть,попуск)))";
        document.querySelector(".podskaz").disebled=true 

    }
}


document.querySelector(".reload").onclick = function () {
    document.querySelector(".podskaz").innerHTML = "Я подсказка";
    document.querySelector(".number").value = "";
    document.querySelector(".number").focus();
    popit = 3;
    document.querySelector(".popit").innerHTML = popit;
    document.querySelector(".number").disabled=false;
    document.querySelector(".check").disabled=false;
    
    secretnumber = getrandom(1, 10);
}

function getrandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




