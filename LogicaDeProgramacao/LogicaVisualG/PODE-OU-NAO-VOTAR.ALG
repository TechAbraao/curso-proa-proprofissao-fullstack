Algoritmo "pode-ou-nao-votar"
//Algoritmo "Estrutura Condicional"
// Disciplina   : Lógica de Programação com JavaScript
// Professor   : Jailson
// Descrição   :
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 26/03/2024
Var
   //
   An: inteiro // Ano Nascimento
   Aa: inteiro // Ano Atual
   I: inteiro // Idade
   //
Inicio
   //
   Escreval("Em qual ano você se encontra? ")
   Leia(Aa)
   Escreval("Qual é o ano do seu nascimento?")
   Leia(An)
   //
   I <- (Aa - An) // Cálculo da idade atual.
   // Estrutura que verifica a idade.
   se (I >= 18) entao
      Escreval("Verifiquei que você é maior de dezoito, portanto, pode votar.")
   senao
      Escreval("Idade menor que dezoito, portanto, não pode votar.")
   fimse
Fimalgoritmo
