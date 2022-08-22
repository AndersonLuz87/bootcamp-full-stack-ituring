//Prática 12: Dividindo em grupos



function formargrupos(lista) {
    let numeroAlunos = lista.length
    let quantidadeGrupos = lista.length / 2
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let i = 0

    for(item of lista){
    if(grupo1.length < 2){
        grupo1.push(lista[i])
    } else if (grupo2.length < 2){
        grupo2.push(lista[i])
    }else{
        grupo3.push(lista[i])
    }
    i++
}

    console.log (numeroAlunos)
    console.log (quantidadeGrupos)  
    console.log(grupo1)
    console.log(grupo2)
    console.log(grupo3)

    return `[${grupo1}][${grupo2}][${grupo3}]`
}


let n = formargrupos (["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"])
console.log(n)
