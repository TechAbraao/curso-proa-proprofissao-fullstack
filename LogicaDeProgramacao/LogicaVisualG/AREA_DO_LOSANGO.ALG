Algoritmo "area_do_losango"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que recebe dois valores inteiros, diagonal maior e diagonal menor, e calcula a área de um losango.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
D: inteiro
X: inteiro

Inicio
//
Escreval("Digite um número inteiro que corresponda a diagonal maior de um losango: ")
Leia(D)
se (D <= 0) entao
   Escreval("O valor da diagonal maior é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor da diagonal maior é maior do que zero, portanto, é válido.")
fimse
//
Escreval("Digite um número inteiro que corresponda a diagonal maior de um losango: ")
Leia(X)
se (X <= 0) entao
   Escreval("O valor da diagonal menor é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor da diagonal menor é maior do que zero, portanto, é válido.")
fimse
Escreval("A área do losango é: ",(D * X) / 2)
Fimalgoritmo
