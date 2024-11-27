//Invertir caracteres de un string
function reverseString(string){
   return string.split('').reverse().join('')
}
//Split -> Dividir la cadena en un array de caracteres
//Reverse -> Es un metodo que invierte el orden de los elementos en un array
//Join -> Une los elementos de un array en un string de text
const reverse = reverseString('hello');
console.log(reverse);
//Esta es otra manera de resolver este ejercicio