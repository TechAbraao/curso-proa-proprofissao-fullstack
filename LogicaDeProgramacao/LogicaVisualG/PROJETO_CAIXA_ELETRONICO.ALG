Algoritmo "projeto_caixa_eletronico"
// Disciplina   : Lógica de Programação com JavaScript
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Abraão Vitor Silva Santos
// Data atual  : 27/03/2024
Var
   //
   ligaDesliga: logico
   //
   operadorTentativas: inteiro
   //
   tentativas: inteiro
   operador, senha, registraSenha: inteiro
   salario, depositoTotal, deposito: real
   usuario, registraUsuario: caracter
   //
Inicio
   //
   Escreval("Registre um novo usuário: ")
   Leia(registraUsuario)
   Escreval("Digite uma nova senha: ")
   Leia(registraSenha)
   limpatela
   Escreval("Usuário e Senha registrados com sucesso.")
   //
   operadorTentativas <- 1
   tentativas <- 3
   //
   ENQUANTO operadorTentativas < 4 FACA
      //
      Escreval("Digite seu usuário: ")
      Leia(usuario)
      Escreval("Digite sua senha: ")
      Leia(senha)
      //
      se (registraUsuario <> usuario) ou (registraSenha <> senha) entao
         Escreval("Você errou os dados! você tem ", tentativas - operadorTentativas)
      fimse
      se (operadorTentativas = 3) entao
         Escreval("Programa encerrado.")
         Fimalgoritmo
      fimse
      //
      operadorTentativas <- operadorTentativas + 1
      //
      ENQUANTO (registraUsuario = usuario) e (registraSenha = senha) FACA
         Escreval("Escolha alguma das opções abaixo: ")
         timer(1750)
         limpatela
         //
         Escreval("1 - Saque, 2 - Depósito, 3 - Pagamento")
         Escreval("4 - Transferência, 5 - Saldo, 6 - Extrato")
         Escreval("7 - PIX, 8 - Encerrar programa")
         //
         Escreval("Quais das opções você quer selecionar? ")
         Leia(operador)
         //
         Escolha operador
         Caso 1
            limpatela
            Escreval("Você selecionou a opção: Saque.")
         Caso 2
            //
            limpatela
            Escreval("Você selecionou a opção Depósito.")
            // timer(1000)
            Escreval("Quantos R$ deseja depositar? ")
            Leia(deposito)
            depositoTotal <- depositoTotal + deposito
            Escreval("Seu saldo atual é: R$ ",depositoTotal)
            //
         Caso 3
            limpatela
            Escreval("Você selecionou a opção Pagamento.")
         Caso 4
            limpatela
            Escreval("Você selecionou a opção Transferência.")
         Caso 5
            limpatela
            Escreval("Você selecionou a opção Saldo.")
         Caso 6
            limpatela
            Escreval("Você selecionou a opção Extrato.")
         Caso 7
            limpatela
            Escreval("Você selecionou a opção PIX.")
         Caso 8
            limpatela
            Escreval("Programa encerrado com sucesso.")

            // Em construção
         outrocaso
            limpatela
            Escreval("Não existem opções disponíveis na qual você selecionou.")
         fimescolha
      FIMENQUANTO
   FIMENQUANTO
Fimalgoritmo