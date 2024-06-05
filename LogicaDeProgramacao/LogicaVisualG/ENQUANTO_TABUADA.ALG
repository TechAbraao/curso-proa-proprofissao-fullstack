Algoritmo "enquanto_tabuada"
// Disciplina   : Lógica de Programação com JavaScript
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 27/03/2024

Var
   //
   I: inteiro // Operador do laço de repetição.
   V: inteiro // Valor da tabuada selecionada pelo usuário.
   //
Inicio
   //
   Escreval("Qual é a tabuada que você deseja visualizar? ")
   Leia(V)
   limpatela
   //
   I <- 1
   //
   ENQUANTO I < 11 FACA
      Escreval("R:", (I*V))
   //
      I <- 1 + I
   FIMENQUANTO
   //
Fimalgoritmo