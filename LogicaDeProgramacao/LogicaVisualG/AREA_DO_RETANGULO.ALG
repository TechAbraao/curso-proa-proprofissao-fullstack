Algoritmo "area_do_retangulo"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que lê dois números inteiros, base e altura, e efetua o cálculo da área de um retângulo.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
X: inteiro
Y: inteiro
Inicio
// Base do retângulo, sabendo que base > 0.
Escreval("Digite um número inteiro que corresponde a base de um retângulo: ")
Leia(X)
 se (X <= 0) entao
    Escreval("O valor da base é menor do que zero, portanto, é inválido.")
    Fimalgoritmo
 senao
      Escreval("Valor da base é maior do que zero, portanto, é válido.")
 fimse
// Altura do retângulo, sabendo que altura > 0.
Escreval("Digite um número inteiro que corresponde a altura de um retângulo: ")
Leia(Y)
 se (Y <= 0) entao
    Escreval("O valor da altura é menor do que zero, portanto, é inválido.")
    Fimalgoritmo
 senao
      Escreval("Valor da altura é maior do que zero, portanto, é válido.")
 fimse
 // Cálculo da Área. Sabe-se que: A = (B * H).
 Escreval("A área do retângulo cujas medidas foi especificadas, é: ",(X * Y))
Fimalgoritmo