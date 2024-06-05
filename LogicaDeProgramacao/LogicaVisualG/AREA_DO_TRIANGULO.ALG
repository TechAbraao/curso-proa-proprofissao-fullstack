Algoritmo "area_do_triangulo"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que recebe dois valores inteiros, base e altura, e calcula a área de um triângulo.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
B: inteiro
H: inteiro

Inicio
//
Escreval("Digite um número inteiro que corresponda a base de um triângulo: ")
Leia(B)

se (B <= 0) entao
   Escreval("O valor da base é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor da base é maior do que zero, portanto, é válido.")
fimse
//
Escreval("Digite um número inteiro que corresponda a altura de um triângulo: ")
Leia(H)

se (H <= 0) entao
   Escreval("O valor da altura é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor da altura é maior do que zero, portanto, é válido.")
fimse

Escreval("A área do triângulo corresponde à: ",(B * H)/2)
Fimalgoritmo
