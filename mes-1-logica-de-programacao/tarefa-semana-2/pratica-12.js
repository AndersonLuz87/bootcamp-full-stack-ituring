//Prática 12: Exibindo o dia da semana

function diaDaSemana (dia) {
    if (dia === 01) {
        return `01: Segunda`;
    } else if (dia === 02) {
        return `02: Terça`;
    } else if (dia === 03) {
        return `03: Quarta`;
    } else if (dia === 04) {
        return `04: Quinta`;
    } else if (dia === 05) {
        return `05: Sexta`;
    } else if (dia === 06) {
        return `06: Sábado`;
    } else if (dia === 07) {
        return `07: Domingo`;
    } else {
        return `O número ${dia} não é válido para um dia da semana`
    }
}

console.log(diaDaSemana(01));
console.log(diaDaSemana(02));
console.log(diaDaSemana(03));
console.log(diaDaSemana(04));
console.log(diaDaSemana(05));
console.log(diaDaSemana(06));
console.log(diaDaSemana(07));
console.log(diaDaSemana(9));