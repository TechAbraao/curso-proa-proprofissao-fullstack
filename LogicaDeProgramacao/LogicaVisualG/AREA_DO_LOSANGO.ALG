Algoritmo "area_do_losango"
// Disciplina   : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson
// Descri��o   : Programa que recebe dois valores inteiros, diagonal maior e diagonal menor, e calcula a �rea de um losango.
// Autor(a)    : Abra�o Vitor Silva Santos
// Data atual  : 20/03/2024
Var
D: inteiro
X: inteiro

Inicio
//
Escreval("Digite um n�mero inteiro que corresponda a diagonal maior de um losango: ")
Leia(D)
se (D <= 0) entao
   Escreval("O valor da diagonal maior � menor do que zero, portanto, � inv�lido.")
   Fimalgoritmo
senao
     Escreval("Valor da diagonal maior � maior do que zero, portanto, � v�lido.")
fimse
//
Escreval("Digite um n�mero inteiro que corresponda a diagonal maior de um losango: ")
Leia(X)
se (X <= 0) entao
   Escreval("O valor da diagonal menor � menor do que zero, portanto, � inv�lido.")
   Fimalgoritmo
senao
     Escreval("Valor da diagonal menor � maior do que zero, portanto, � v�lido.")
fimse
Escreval("A �rea do losango �: ",(D * X) / 2)
Fimalgoritmo
