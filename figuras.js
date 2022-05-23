// Este es el codigo del cuadrado
console.group("Cuadrado");
  //const ladoCuadrado = 5;
 // console.log("Los lados del cuadrado miden:" + ladoCuadrado);

  function perimetroCuadrado(lado) {
      return lado * 4;
  }
  perimetroCuadrado()
  //console.log("El perimetro del cuadrado es:" + perimetroCuadrado);

  //const areaCuadrado = ladoCuadrado * ladoCuadrado;
  function areaCuadrado(lado) {
      return lado * lado;
  }
  //console.log("El area del cuadrado es:" + areaCuadrado);
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
