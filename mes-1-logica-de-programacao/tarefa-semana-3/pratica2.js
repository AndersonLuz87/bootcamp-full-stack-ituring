//Prática 2: Exiba os ímpares

function ehPar (numeroLimite) {
    let i = 1;

    while (i <= numeroLimite) {

        if (i % 2 === 0){
            
            console.log(`O número ${i} é par`);
        }

        i ++;
    }
}

ehPar(17);
