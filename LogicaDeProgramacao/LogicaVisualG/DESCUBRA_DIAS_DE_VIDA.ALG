Algoritmo "descubra_dias_de_vida"
// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson
// Descrição   :
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 20/03/2024
Var
// Seção de Declarações das variáveis 
AN: inteiro     // Ano de Nascimento
AA: inteiro     // Ano Atual
MV: inteiro     // Meses de vida
DV: inteiro     // Dias de vida
X: inteiro
Y: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval("Você nasceu em qual ano? ")
Leia(AN)
Escreval("Em qual ano você se encontra? ")
Leia(AA)
Escreval("Pelos meus cálculos, você tem ou fará ",(AA - AN)," anos de idade.")

Escreval("Qual é o mês atual, de forma numérica? ")
Leia(MV)
Escreval("Que dia é hoje, de forma numérica? ")
Leia(DV)
Escreval("Então, como você disse, hoje estamos no mês ",MV, " do dia ",DV)

X <- 365 * (AA - AN)
Y <- (MV * 30) + DV
Escreval("Realizei um cálculo em função dos dados que você me disse! descobri um fato interessante!")
Escreval("Em dias vivídos, você tem ", (X + Y))

Fimalgoritmo