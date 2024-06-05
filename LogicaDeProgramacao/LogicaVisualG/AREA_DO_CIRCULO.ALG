Algoritmo "area_do_circulo"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que recebe um valor inteiro e calcula a área de um circulo.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
R: inteiro

Inicio
// Recebendo o lado do quadrado sabendo que lado > 0
Escreval("Digite um número inteiro que corresponda ao raio de um circulo: ")
Leia(R)

se (R <= 0) entao
   Escreval("O valor do raio é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor do raio é maior do que zero, portanto, é válido.")
fimse

Escreval("A área do circulo corresponde à: ",PI * (R ^ 2))
Fimalgoritmo
