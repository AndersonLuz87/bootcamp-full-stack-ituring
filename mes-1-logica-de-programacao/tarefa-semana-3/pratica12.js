//Prática 12: Dividindo em grupos

function divisaoGrupos (lista, numMaxAlunos) {
   
    const qtdGrupos = lista.length / numMaxAlunos;
    let grupo1 = [];
    let grupo2 = [];
    let grupo3 = [];
   
   for (item of lista) {

        if (grupo1.length <= numMaxAlunos -1 ) 

            grupo1.push(item);

         else if (grupo2.length <= numMaxAlunos - 1)

            grupo2.push(item);

         else 

            grupo3.push(item);
       
   };

   return `
   Grupo 1: ${grupo1}
   Grupo 2: ${grupo2}
   Grupo 3: ${grupo3}`;

};

console.log(divisaoGrupos(["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"], 2));