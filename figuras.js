// Este es el codigo del cuadrado
console.group("Cuadrado");
  
  function perimetroCuadrado(lado) {
      return lado * 4;
  }
  perimetroCuadrado()
  function areaCuadrado(lado) {
      return lado * lado;
  }
console.groupEnd

// Este es el codigo del triangulo
console.group("Triangulo");
 function perimetroTriangulo(lado1, lado2, base){
     return lado1 + lado2 + base;
 }
 function areaTriangulo (base, altura){
     return (base * altura) /2;
 }
console.groupEnd

// Este es el codigo del Circulo
console.group("Circulo");
 function diametroCirculo(radio){
     return radio * 2;
 }
 function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * 3.1415;
 }
 function areaCirculo(radio){
     return (radio * radio) * 3.1415
 }
console.groupEnd

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areaC = areaCuadrado(value);
    alert(areaC);

}
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetroT = perimetroTriangulo(value);
    alert(perimetroT);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const areaT = areaTriangulo(value);
    alert(areaT);
}