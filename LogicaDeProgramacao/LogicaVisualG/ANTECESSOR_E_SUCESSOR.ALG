Algoritmo "area_do_retangulo"
// Disciplina   : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson
// Descri��o   : Programa que l� dois n�meros inteiros, base e altura, e efetua o c�lculo da �rea de um ret�ngulo.
// Autor(a)    : Abra�o Vitor Silva Santos
// Data atual  : 20/03/2024
Var
X: inteiro
Y: inteiro
Inicio
// Base do ret�ngulo, sabendo que base > 0.
Escreval("Digite um n�mero inteiro que corresponde a base de um ret�ngulo: ")
Leia(X)
 se (X <= 0) entao
    Escreval("O valor da base � menor do que zero, portanto, � inv�lido.")
 senao
      Escreval("Valor da base � maior do que zero, portanto, � v�lido.")
 fimse
// Altura do ret�ngulo, sabendo que altura > 0.
Escreval("Digite um n�mero inteiro que corresponde a altura de um ret�ngulo: ")
Leia(Y)
 se (Y <= 0) entao
    Escreval("O valor da altura � menor do que zero, portanto, � inv�lido.")
 senao
      Escreval("Valor da altura � maior do que zero, portanto, � v�lido.")
 fimse
 // C�lculo da �rea. Sabe-se que: A = (B * H).
 Escreval("A �rea do ret�ngulo cujas medidas foi especificadas, �: ",(X * Y))
Fimalgoritmo