const lista1 = [87, 5,-3, 22,19]
const lista2 = ['chocolate', 'pipoca', 'açai', 'nutella']
const lista3 = [10, 'bola', false]
const lista1Copia = lista1.slice();
const lista2Copia = lista2.slice();
const lista3Copia = lista3.slice();

//parte1
lista1Copia.push(51);
console.log(lista1);
console.log(lista1Copia);

//parte2
lista2Copia.pop();
console.log(lista2);
console.log(lista2Copia);

//parte3
lista3Copia.splice(2,1);
console.log(lista3);
console.log(lista3Copia);

