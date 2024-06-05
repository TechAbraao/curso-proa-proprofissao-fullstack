Algoritmo "area_do_quadrado"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que lê um valor inteiro, o lado do quadrado, e calcula a área do quadrado.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
L: inteiro
Inicio
// Recebendo o lado do quadrado sabendo que lado > 0
Escreval("Digite um número inteiro que corresponda ao lado de um quadrado: ")
Leia(L)

se (L <= 0) entao
   Escreval("O valor do lado é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor do lado é maior do que zero, portanto, é válido.")
fimse

Escreval("A área do quadrado corresponde à: ",(L*L))
Fimalgoritmo
