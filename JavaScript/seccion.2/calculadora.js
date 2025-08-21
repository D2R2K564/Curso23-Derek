/*2. Crea una función llamada calculadora que reciba dos números y un operador
  (suma, resta, multiplicación o división) y realice la operación correspondiente.
  - Si el operador no es válido, muestra un mensaje de error.
  Ejecutala 3 veces con diferentes números y operadores, debes realizar validaciones
  */

  let num1 = Number(prompt("ingrese primer numero"));
  let num2 = Number(prompt("ingrese segundo numero"));
  let operador = prompt("ingrese operador +, -, *, /");
  let resultado = 0
  

function calculadora (num1, num2,operador){
  if (operador === "+"){
    resultado = num1+ num2
  alert(`El resultado es ${resultado}`);
  }
  else if(operador === "-" ){
    resultado = num1-num2
    alert(`El esultado es ${resultado}`);
  }
  else if(operador==="*"){
    resultado= num1*num2
    alert(`El resultado es ${resultado}`);
  }
  else  if(operador === "/"){
    if(num2 !==0 ){
    resultado = num1/num2
    alert(`el resultado es ${resultado}`);
    }
    else{
      alert("no se puede dividir por 0");
    } 
  }
  else(alert("operador no valido"))
}

calculadora(num1,num2,operador);