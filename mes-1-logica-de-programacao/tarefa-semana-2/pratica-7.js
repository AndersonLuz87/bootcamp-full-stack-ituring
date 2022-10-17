//Prática 7: Tradutor de "Hello World!"

function tradutor (idioma){

    if (idioma === "en") {
        console.log ("Hello World!")
    } else if (idioma === "es") {
        console.log ("Holla mundo!")
    } else {
        console.log ("Olá mundo!")

    }
}

tradutor ("en")
tradutor ("es")
tradutor ("pt")