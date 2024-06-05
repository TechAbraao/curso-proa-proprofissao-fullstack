Algoritmo "equacao_pitagoras"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   : Programa que recebe dois valores inteiros, os catetos, e cálcula a hipotenusa.
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
A: inteiro
B: inteiro
H: real
Inicio
// Primeiro cateto
Escreval("Escreva o primeiro cateto do Triângulo Retângulo: ")
Leia(A)
se (A <= 0) entao
   Escreval("O valor do primeiro cateto é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor do primeiro cateto é maior do que zero, portanto, é válido.")
fimse

// Segundo cateto
Escreval("Escreva o segundo cateto do Triângulo Retângulo: ")
Leia(B)
se (B <= 0) entao
   Escreval("O valor do segundo cateto é menor do que zero, portanto, é inválido.")
   Fimalgoritmo
senao
     Escreval("Valor do segundo cateto é maior do que zero, portanto, é válido.")
fimse
// Efetuando a Fórmula de Pitágoras
H <- (A^2)+(B^2)
Escreval("Após elevar ao quadrado os dois catetos e somá-los, a hipotenusa é: ",RAIZQ(H))
Fimalgoritmo
