const lista1 = [87, 5,-3, 22,19]
const lista2 = ['chocolate', 'pipoca', 'açai', 'nutella']
const lista3 = [10, 'bola', false]
//fazendo as copias
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
lista3Copia.splice(1,1);
console.log(lista3);
console.log(lista3Copia);
/*"(i,n)"o indice do splice SEMPRE começa do elemento que quero excluir e o n = quantidade. confere?
a primeira informação que a gente passa é o índice do elemento a ser eliminado (lembrando que índice começa a ser contado do 0)
a segunda informação é a QUANTIDADE de itens que queremos eliminar
então se eu quero eliminar apenas o quinto elemento, eu faço assim:

array.splice(4, 1)
ou seja, 4 é o índice
e eu quero eliminar só um elemento, então eu boto o 1*/

//adicionando itens com splice
//lista3Copia.splice(1,0,'rede');
//console.log(lista3Copia);

