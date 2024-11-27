//Invertir caracteres de un string
function reverseString(string){
   return string.split('').reverse().join('')
}
//Split -> Dividir la cadena en un array de caracteres
//Reverse -> Es un metodo que invierte el orden de los elementos en un array
//Join -> Une los elementos de un array en un string de text
const reverse = reverseString('hello');
console.log(reverse);


//Esta es otra manera de resolver este ejercicio usando el bucle for
function reverseString2(string){
   let reversed2=''
   for (let i = string.length -1; i>=0;i--) {
      reversed2 +=string[i]
   }
   return reversed2
}
const reverse2 = reverseString2('SoyManuRios')
console.log(reverse2);

