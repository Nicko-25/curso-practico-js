const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
  }
//ordenamos el array
const salariosColSorted = salariosCol.sort(
    function (salaryA, SalaryB){
        return salaryA - SalaryB;
    }
);
function esPar(numerito){
    return (numerito % 2 === 0)
}
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
const personitaMitad1 = lista[mitad - 1];
const personitaMitad2 = lista[mitad];
const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
console.log(medianaSalarios(salariosColSorted));