Algoritmo "9-salario-mensal-reajuste"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
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
Escreval("Digite o seu sal�rio atual: ")
Leia(salario)
//
Escreval("Digite, de forma porcentual, o reajuste: ")
Leia(reajuste)
Escreval("Seu sal�rio ter� um aumento de", reajuste, "%")
//
salarioAjustado <- salario + ((reajuste / 100) * salario)
Escreval("Seu sal�rio atual �:", salarioAjustado)

Fimalgoritmo