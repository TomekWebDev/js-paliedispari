// Esercizio 1

function checkPalindroma(){

    let parola = document.getElementById("inputParola").value;

    let reverse = "";

    for(i=parola.length - 1; i >= 0; i--){
        console.log(parola[i]);

        reverse += parola[i];
    }

    console.log(reverse);

    if(parola == reverse){
        document.getElementById("risultatoRicerca").innerText = parola + " è palindroma!"
    }
    else{
        document.getElementById("risultatoRicerca").innerText = parola + " non è palindroma :(";
    }

}

