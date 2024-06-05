Algoritmo "9-salario-mensal-reajuste"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/04/2024
Var
//
salario: real
reajuste: real
salarioAjustado: real
//
Inicio
//
Escreval("Digite o seu salário atual: ")
Leia(salario)
//
Escreval("Digite, de forma porcentual, o reajuste: ")
Leia(reajuste)
Escreval("Seu salário terá um aumento de", reajuste, "%")
//
salarioAjustado <- salario + ((reajuste / 100) * salario)
Escreval("Seu salário atual é:", salarioAjustado)

Fimalgoritmo