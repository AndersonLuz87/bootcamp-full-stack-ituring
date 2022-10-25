//Prática 11: Ordenação

function ordenarNumeros (lista){
    let listOrd = [];
    let tamLista = lista.length;

    for (item of lista){
        listOrd.push(lista[0]);
    };

  for (item of lista) { 
    
    if (item > listOrd[tamLista-1]) {     
      
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = listOrd [tamLista - 5];
        listOrd[tamLista - 5] = listOrd [tamLista - 4];
        listOrd[tamLista - 4] = listOrd [tamLista - 3];
        listOrd[tamLista - 3] = listOrd [tamLista - 2];
        listOrd[tamLista - 2] = listOrd [tamLista - 1];
        listOrd[tamLista - 1] = item;

    } else if (item > listOrd[tamLista-2]){
     
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = listOrd [tamLista - 5];
        listOrd[tamLista - 5] = listOrd [tamLista - 4];
        listOrd[tamLista - 4] = listOrd [tamLista - 3];
        listOrd[tamLista - 3] = listOrd [tamLista - 2];
        listOrd[tamLista - 2] = item;

    } else if (item > listOrd[tamLista-3]){
    
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = listOrd [tamLista - 5];
        listOrd[tamLista - 5] = listOrd [tamLista - 4];
        listOrd[tamLista - 4] = listOrd [tamLista - 3];
        listOrd[tamLista - 3] = item;

    } else if (item > listOrd[tamLista-4]){
     
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = listOrd [tamLista - 5];
        listOrd[tamLista - 5] = listOrd [tamLista - 4];
        listOrd[tamLista - 4] = item;
        
    } else if (item > listOrd[tamLista-5]){
     
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = listOrd [tamLista - 5];
       listOrd[tamLista - 5] = item;

    } else if (item > listOrd[tamLista-6]){
      
        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = listOrd [tamLista - 6];
        listOrd[tamLista - 6] = item;

    } else if (item > listOrd[tamLista-7]){

        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = listOrd [tamLista - 7];
        listOrd[tamLista - 7] = item;

    } else if (item > listOrd[tamLista-8]){

        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista - 9] = listOrd [tamLista - 8];
        listOrd[tamLista - 8] = item;

    } else if (item > listOrd[tamLista-9]){

        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = listOrd [tamLista - 9];
        listOrd[tamLista -9] = item;

    } else if (item > listOrd[tamLista-10]){

        listOrd[tamLista - 11] = listOrd [tamLista - 10];
        listOrd[tamLista - 10] = item;

    } else {

        listOrd [tamLista - 11] = item;
    }
  };
    
 return `Lista Final [${listOrd}]`;

};

console.log(ordenarNumeros([10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]));