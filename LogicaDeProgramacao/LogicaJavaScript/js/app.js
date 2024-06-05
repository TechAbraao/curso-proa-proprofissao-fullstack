
/* 5.0 Escreva um algoritmo para ler um valor (do teclado)
e escrever (na tela) o seu antecessor. */
document.getElementById("botao-1").addEventListener("click", function () {
    //
    let numero1 = parseInt(window.prompt("Digite um número qualquer: "));
    //
    window.prompt(`O sucessor do número digitado é: ${numero1 + 1}\nO antecessor do número digitado é: ${numero1 - 1}`);
})

/* 6.0 Escreva um algoritmo para ler as dimensões de um retângulo
(base e altura), calcular e escrever a área do retângulo. */
document.getElementById("botao-2").addEventListener("click", function () {
    //
    let base = parseInt(window.prompt("Digite o valor da base de um triângulo qualquer: "));
    let altura = parseInt(window.prompt("Digite o valor da altura de um triângulo qualquer: "));
    //
    if (altura > 0 && base > 0) {
        areaDoTriangulo = (base * altura) / 2
    } else {
        window.alert("Valores digitados não correspondem à existência de um triângulo.")
    }
    //
    window.alert(`A área do triângulo especificado é: ${areaDoTriangulo}`);
    //
})

/* 7.0 Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. */
document.getElementById("botao-3").addEventListener("click", function () {
    //
    let anos = parseInt(window.prompt("Digite a sua idade atualmente: ")); // idade * 365 dias 
    let meses = parseInt(window.prompt("Digite o mês atual que você se encontra: ")); // ((meses * 30) - 30)
    let dias = parseInt(window.prompt("Digite o dia do mês numericamente: ")); // 
    //
    let diasNaTerra = (anos * 365) + (meses * 30) - 30 + dias;
    window.alert(`Você está vivo na Terra a ${diasNaTerra} dias.`);
    //
})

/* 8.0 Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores. */
document.getElementById("botao-4").addEventListener("click", function () {
    //
    let votosBrancos = parseInt(window.prompt("Digite o total de votos brancos: "));
    let votosNulos = parseInt(window.prompt("Digite o total de votos nulos: "));
    let votosValidos = parseInt(window.prompt("Digite o total de votos válidos: "));
    let votosTotal = (votosValidos + votosNulos + votosBrancos);
    //
    window.alert(`Total de votos: ${votosTotal.toFixed(2)}`);
    window.prompt(`O porcentual de votos brancos: ${((votosBrancos / votosTotal) * 100).toFixed(3)}\n
O porcentual de votos nulos: ${((votosNulos / votosTotal) * 100).toFixed(2)}\n
O porcentual de votos validos: ${((votosValidos / votosTotal) * 100).toFixed(2)}\n`);
    //
})

/* 9.0 Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. */
document.getElementById("botao-5").addEventListener("click", function () {
    //
    let salario = parseFloat(window.prompt("Digite seu atual salário: "))
    let reajuste = parseFloat(window.prompt("Digite a quantidade, em porcentagem, que deseja reajustar: "))
    //
    novoSalario = salario * ((100 + reajuste) / 100).toFixed(2)
    window.alert(`O porcentual de aumento corresponde a: ${reajuste}%\nSeu novo salário é: R$ ${novoSalario}`)
})

/* 10.0  O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. */
document.getElementById("botao-6").addEventListener("click", function () {
    //
    let precoInicial = parseInt(window.prompt("Digite o preço inicial do carro: "));
    let precoDistribuidor = precoInicial * (128 / 100);
    let precoDistribuidorComImposto = precoDistribuidor * (145 / 100);
    let precoFinal = precoDistribuidorComImposto;
    //
    window.alert(`\nO preço final do carro para o consumidor é: R$ ${precoFinal.toFixed(2)}\n`);
    //
})

/* 11.0 Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. 
 */
document.getElementById("botao-7").addEventListener("click", function () {
    //
    let salarioFixo = parseInt(window.prompt("Digite seu salário fixo: "))
    let comissaoCarroVendido = parseInt(window.prompt("Digite sua comissão por carro vendido: "))
    let vendasNoMes = parseInt(window.prompt("Digite a quantidade, em reais, de vendas neste mês: "))
    window.alert(`Seu salário fixo: R$ ${salarioFixo}\nComissão por venda de carro: R$ ${comissaoCarroVendido}\nQuantidade, em reais, de vendas neste mês é: R$ ${vendasNoMes}`)
    //
    let qntCarrosVendidos = parseInt(window.prompt("Digite a quantidade de carros vendidos por você neste mês: "))
    //
    window.alert(`Sua comissão por venda de carro é: R$ ${qntCarrosVendidos * comissaoCarroVendido}\n5% das vendas totais no mês é: ${(5 / 100) * vendasNoMes}`)
    window.alert(`Seu salário final é: ${salarioFixo + ((5 / 100) * vendasNoMes) + (qntCarrosVendidos * comissaoCarroVendido)}`)
})

/* 12.0 Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo): */
document.getElementById("botao-8").addEventListener("click", function () {
    //
    let valorFahrenheit = parseInt(window.prompt("Digite a temperatura em Fahrenheit e descubra em graus Celsius: "))
    let valorEmCelcius = 5 * ((valorFahrenheit - 32) / 9)
    //
    window.alert(`O valor ${valorFahrenheit} °F em graus celcius é: ${valorEmCelcius} °C`)
    //
})

/* 13.0 Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. */
document.getElementById("botao-9").addEventListener("click", function () {
    //
    let nota1 = prompt("Digite a primeira nota: ");
    let nota2 = prompt("Digite a segunda nota");
    let nota3 = prompt("Digite a terceira nota");
    //
    const mediaPonderada = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
    //
    alert(`Pelo cálculo obtido através das suas notas, sua média ponderada é: ${mediaPonderada.toFixed(2)}`)
    //
})

/* 14.0 Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,  caso 
contrário escrever NÃO É MAIOR QUE 10! */
document.getElementById("botao-10").addEventListener("click", function () {
    //
    const numero = parseInt(prompt("Digite um número qualquer: "))
    //
    if (numero > 10) {
        alert("É MAIOR QUE 10!")
    } else {
        alert("NÃO É MAIOR QUE 10!")
    }
    //
})

/* 15.0 Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). */
document.getElementById("botao-11").addEventListener("click", function () {
    //
    const numero = parseInt(prompt("Digite um número qualquer: "));
    //
    if (numero >= 0) {
        alert(`O número ${numero} é positivo.`);
    } else {
        alert(`O número ${numero} é negativo.`);
    }
    //
})

/* 16.0 As maçãs custam R$  1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. */
document.getElementById("botao-12").addEventListener("click", function () {
    //
    const qntMaças = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
    //
    if (qntMaças < 12) {
        let preço = 1.3; // Se a qntMaças for menor que 12, custará R$ 1.3
        alert(`Você comprou ${qntMaças}, portanto, custará R$ ${(preço * qntMaças).toFixed(2)} as maçãs.`);
    } else {
        let preço = 1.0; // Se a qntMaças for maior que 12, custará R$ 1.0
        alert(`Você comprou ${qntMaças}, portanto, custará R$ ${(preço * qntMaças).toFixed(2)} as maçãs.`);
    }
    //

})

/* 17.0 Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada */
document.getElementById("botao-13").addEventListener("click", function () {
    //
    let nota1 = parseInt(prompt("Digite a nota da sua primeira avaliação: "));
    let nota2 = parseInt(prompt("Digite a nota da sua segunda avaliação: "));
    //
    const mediaAritmetica = (nota1 + nota2) / 2;
    alert(`Sua média aritmética resultou em: ${mediaAritmetica.toFixed(2)}`);
    //
    if (mediaAritmetica >= 6) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
    }
    //
})

/* 18.0 Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */
document.getElementById("botao-14").addEventListener("click", function () {
    //
    let anoAtual = parseInt(prompt("Digite o ano atual: "));
    let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
    //
    let idade = (anoAtual - anoNascimento);
    alert(`Pelos meus cálculos, você tem ${idade} anos de idade.`)
    if (idade >= 18) {
        alert("Poderá votar.");
    } else {
        alert("Não poderá votar.");
    }
    //
})

/* 19.0 Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */
document.getElementById("botao-15").addEventListener("click", function () {
    //
    const valor1 = parseInt(prompt("Digite o primeiro valor: "));
    const valor2 = parseInt(prompt("Digite o segundo valor: "));
    //
    if (valor1 > valor2) {
        alert(`O primeiro valor: ${valor1} é maior que o segundo valor: ${valor2}`);
    } else {
        alert(`O primeiro valor: ${valor2} é maior que o segundo valor: ${valor1}`);
    }
    //
})

/* 20.0 Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. */
document.getElementById("botao-16").addEventListener("click", function () {
    //
    let valor1 = parseInt(prompt("Digite o primeiro valor: "));
    let valor2 = parseInt(prompt("Digite o segundo valor: "));
    //
    let condTernaria = (valor1 > valor2) ? `Ordem crescente: [${valor2}, ${valor1}]` : `Ordem crescente: [${valor1}, ${valor2}]`;
    alert(condTernaria);
    //
})

/* 21.0 Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */
document.getElementById("botao-17").addEventListener("click", function () {
    //
    let horas_inicial = parseInt(prompt("Digite o horário que iniciou: "));
    let horas_final = parseInt(prompt("Digite o horário que terminou: "));
    //
    horario_um = (horas_final - 24);
    horario_dois = (horas_inicial - 24);
    horas_geral = (horario_um - horario_dois);
    //
    if (horas_geral < 0) {
        horas_um = horas_inicial - 24
        horas_total = horas_um - horas_final
        alert(`A partida durou: ${Math.abs(hora)}`)
    }
})

/* 22.0 A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas). */
document.getElementById("botao-18").addEventListener("click", function () {
    //
    let horas_trabalhadas_mes = parseInt(prompt("Digite o total de horas trabalhadas em um mês: "))
    let salario_por_hora = parseInt(prompt("Digite seu salário por hora: "))
    //
    if (horas_trabalhadas_mes <= 160) {
        let salario = (horas_trabalhadas_mes * salario_por_hora)
        alert(`Seu salário esse mês é: R$ ${salario.toFixed(2)}`)
    } else {
        let hora_extra = horas_trabalhadas_mes - 160
    }
})

/* 24.0 Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total. */
document.getElementById("botao-19").addEventListener("click", function () {
    //
    let salario_fixo = parseInt(prompt("Digite o seu salário fixo: "));
    let quantidade_valor_vendas = parseInt(prompt("Digite o valor de vendas total realizada nesse mês: "));
    //
    if (quantidade_valor_vendas <= 1500) {
        let comissao1 = (3 / 100) * quantidade_valor_vendas;
        alert(`Comissão: ${comissao1}`)
        let salario_final = (comissao1 + salario_fixo);
        alert(`Neste mês, seu salário será: ${salario_final}`);
    } else {
        let comissao1 = ((3 / 100) * quantidade_valor_vendas) + ((5 / 100) * quantidade_valor_vendas)
        let salario_final = (comissao1 + salario_fixo);
        alert(`Comissão: ${comissao1}`)
        alert(`Neste mês, seu salário será: ${salario_final}`);
    }
    //
})

/* 25.0 Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.  */
document.getElementById("botao-20").addEventListener("click", function () {
    //
    const numero_conta_banco = parseInt(prompt("Digite o número da conta: "))
    let saldo = parseInt(prompt("Digite o saldo atual: "))
    let debito = parseInt(prompt("Digite o saldo no débito: "))
    let credito = parseInt(prompt("Digite o saldo no crédito: "))
    //
    saldo_atual = saldo - debito + credito
    alert(`O seu saldo atual é: R$ ${saldo_atual}`)
    //
    if (saldo_atual >= 0) {
        alert("Saldo positivo.")
    } else {
        alert("Saldo negativo.")
    }
    //
})

/* 26.0 Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'.  */
document.getElementById("botao-21").addEventListener("click", function () {
    //
    let quantidade_atual = parseInt(prompt("Digite a quantidade atual do estoque: "))
    let quantidade_max = parseInt(prompt("Digite a quantidade máxima do estoquie: "))
    let quantidade_min = parseInt(prompt("Digite a quantidade mínima do estoque: "))
    //
    quantidade_media = (quantidade_max + quantidade_min) / 2
    //
    if (quantidade_atual >= quantidade_media) {
        alert("Não efetuar compra.")
    } else {
        alert("Efetuar compra.")
    }
    //
})

// 27.0 Ler um valor e escrever se é positivo, negativo ou zero.
document.getElementById("botao-22").addEventListener("click", function () {
    //
    const valor = parseInt(prompt("Digite um valor qualquer: "))
    //
    if (valor > 0) {
        alert("Valor positivo!")
    } else if (valor == 0) {
        alert("Valor igual a zero!")
    } else {
        alert("Valor negativo!")
    }
})

// 28.0 Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
document.getElementById("botao-23").addEventListener("click", function () {
    //
    let valor_um = parseInt(prompt("Digite o primeiro número: "))
    let valor_dois = parseInt(prompt("Digite o segundo valor: "))
    let valor_tres = parseInt(prompt("Digite o terceiro valor: "))
    //
    if (valor_um == valor_dois && valor_dois == valor_tres && valor_um == valor_tres) {
        alert("Os valores digitados são iguais, logo, não são válidos.")
    } else {
        switch (valor_um > 0) {
            case valor_um > valor_dois && valor_um > valor_tres:
                alert(`O ${valor_um} é o maior!`)
                break
            case valor_dois > valor_um && valor_dois > valor_tres:
                alert(`O ${valor_dois} é o maior!`)
                break
            case valor_tres > valor_um && valor_tres > valor_um:
                alert(`O ${valor_tres} é o maior!`)
                break
            default:
                alert("As condições não foram atendidas.")
        }
    }
})

/* 29.0 Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
maiores. */
document.getElementById("botao-24").addEventListener("click", function () {
    //
    let valor_um = parseInt(prompt("Digite o primeiro número: "))
    let valor_dois = parseInt(prompt("Digite o segundo valor: "))
    let valor_tres = parseInt(prompt("Digite o terceiro valor: "))
    //
    if (valor_um == valor_dois && valor_dois == valor_tres && valor_um == valor_tres) {
        alert("Os valores digitados são iguais, logo, não são válidos.")
    } else {
        switch (true) {
            case (valor_um > valor_tres && valor_dois > valor_tres):
                alert(`A soma dos valores ${valor_um} + ${valor_dois} = ${valor_um + valor_dois}`);
                break;
            case (valor_um > valor_dois && valor_tres > valor_dois):
                alert(`A soma dos valores ${valor_um} + ${valor_tres} = ${valor_um + valor_tres}`);
                break;
            case (valor_dois > valor_um && valor_tres > valor_um):
                alert(`A soma dos valores ${valor_dois} + ${valor_tres} = ${valor_dois + valor_tres}`);
                break;
            default:
                alert("Nenhuma condição atendida.");
                break;
        }
    }
})

/* 30.0 Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
crescente. */
document.getElementById("botao-25").addEventListener("click", () => {
    let valor_um = parseInt(prompt("Digite o primeiro número: "))
    let valor_dois = parseInt(prompt("Digite o segundo valor: "))
    let valor_tres = parseInt(prompt("Digite o terceiro valor: "))
    //
    if (valor_um == valor_dois && valor_dois == valor_tres && valor_um == valor_tres) {
        alert("Os valores digitados são iguais, logo, não são válidos.")
    } else {
        switch (true) {
            case (valor_um < valor_dois && valor_um < valor_tres):
                if (valor_dois < valor_tres) {
                    alert(`Os valores em ordem crescente são: ${valor_um}, ${valor_dois}, ${valor_tres}`);
                } else {
                    alert(`Os valores em ordem crescente são: ${valor_um}, ${valor_tres}, ${valor_dois}`);
                }
                break;
            case (valor_dois < valor_um && valor_dois < valor_tres):
                if (valor_um < valor_tres) {
                    alert(`Os valores em ordem crescente são: ${valor_dois}, ${valor_um}, ${valor_tres}`);
                } else {
                    alert(`Os valores em ordem crescente são: ${valor_dois}, ${valor_tres}, ${valor_um}`);
                }
                break;
            case (valor_tres < valor_um && valor_tres < valor_dois):
                if (valor_um < valor_dois) {
                    alert(`Os valores em ordem crescente são: ${valor_tres}, ${valor_um}, ${valor_dois}`);
                } else {
                    alert(`Os valores em ordem crescente são: ${valor_tres}, ${valor_dois}, ${valor_um}`);
                }
                break;
        }
    }
})

/* 31.0 Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
dos outros 2 lados. */
document.getElementById("botao-26").addEventListener("click", () => {
    //
    let lado_A = parseInt(prompt(`Digite o lado "A" do triângulo: `))
    let lado_B = parseInt(prompt(`Digite o lado "B" do triângulo: `))
    let lado_C = parseInt(prompt(`Digite o lado "C" do triângulo: `))
    //
    if (lado_A == 0 && lado_B == 0 && lado_C == 0) {
        alert("Todos os valores são iguais a zero, portanto, o triângulo não existe.")
    } else {
        switch (true) {
            case (lado_A > lado_B + lado_C):
                alert("Não se trata de um triângulo!")
                break
            case (lado_B > lado_A + lado_C):
                alert("Não se trata de um triângulo!")
                break
            case (lado_C > lado_A + lado_B):
                alert("Não se trata de um triângulo!")
            default:
                alert("É um triângulo!")
        }
    }
})

/* 32.0 Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.  */
document.getElementById("botao-27").addEventListener("click", () => {
    //
    const nome_time_A = prompt("Qual o nome do primeiro time? ");
    let gols_time_A = parseInt(prompt(`Quantos gols o time ${nome_time_A} fez nesse jogo? `));
    //
    const nome_time_B = prompt("Qual o nome do segundo time? ");
    let gols_time_B = parseInt(prompt(`Quantos gols o time ${nome_time_B} fez nesse jogo? `));
    //
    if (gols_time_A == gols_time_B) {
        alert("Ocorreu um empate.")
    } else {
        switch (true) {
            case (gols_time_A > gols_time_B):
                alert(`O time ${nome_time_A} venceu a partida.`)
                break
            case (gols_time_B > gols_time_A):
                alert(`O time ${nome_time_B} venceu a partida.`)
        }
    }
})

/* 33.0 Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
‘Segundo maior’, caso o segundo seja maior que o primeiro. */
document.getElementById("botao-28").addEventListener("click", () => {
    //
    let valor_um = parseInt(prompt("Digite primeiro valor: "));
    let valor_dois = parseInt(prompt("Digite o segundo valor: "));
    //
    switch (true) {
        case (valor_um == valor_dois):
            alert("Números iguais.");
            break
        case (valor_um > valor_dois):
            alert("Primeiro é maior.");
            break
        case (valor_dois > valor_um):
            alert("Segundo é maior.")
            break
        default:
            alert("Valores digitados inválidos.")
    }
})

/* 35.0 */
document.getElementById("botao-29").addEventListener("click", () => {
    //
    const litros_vendidos = parseInt(prompt("Digite a quantidade em litros vendidos? "))
    let tipo_combustivel = prompt("Digite o tipo de combustível? ('g' - Gasolina ou 'a' - Álcool)")
    tipo_combustivel = tipo_combustivel.toLowerCase()
    //
    const preco_gasolina = 3.30
    const preco_alcool = 2.90
    let preco_total = 0
    //
    switch (true) {
        case tipo_combustivel === "g":
            if (litros_vendidos <= 20) {
                preco_total = litros_vendidos * preco_alcool * (1 - 0.03);
                alert(`Preço final: R$ ${preco_alcool.toFixed(2)}`)
                break
            } else {
                preco_total = litros_vendidos * preco_alcool * (1 - 0.05);
                alert(`Preço final: R$ ${preco_alcool.toFixed(2)}`)
                break
            }
        //
        case tipo_combustivel === "a":
            if (litros_vendidos <= 20) {
                preco_total = litros_vendidos * preco_gasolina * (1 - 0.04);
                alert(`Preço final: R$ ${preco_alcool.toFixed(2)}`)
                break
            } else {
                preco_total = litros_vendidos * preco_gasolina * (1 - 0.06);
                alert(`Preço final: R$ ${preco_alcool.toFixed(2)}`)
                break
            }
    }
})

/* 36.0 Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
novo com a mulher mais velha. */
document.getElementById("botao-30").addEventListener("click", () => {
    //
    let idade_homem_A = parseInt(prompt("Digite a idade do primeiro homem: "))
    let idade_mulher_A = parseInt(prompt("Digite a idade da primeira mulher: "))
    //
    let idade_homem_B = parseInt(prompt("Digite a idade do segundo homem: "))
    let idade_mulher_B = parseInt(prompt("Digite a idade da segunda mulher: "))
    //
    let idade_maior_homem, idade_menor_homem, idade_maior_mulher, idade_menor_mulher
    switch (true) {
        case (idade_homem_A === idade_homem_B || idade_mulher_A === idade_mulher_B):
            alert("A idade dos homens ou das mulheres são a mesma, logo, o programa não vai funcionar.");

        case (idade_homem_A !== idade_homem_B && idade_mulher_A !== idade_mulher_B):
            if (idade_homem_A > idade_homem_B) {
                idade_maior_homem = idade_homem_A;
                idade_menor_homem = idade_homem_B;
            } else {
                idade_maior_homem = idade_homem_B;
                idade_menor_homem = idade_homem_A;
            }
            if (idade_mulher_A > idade_mulher_B) {
                idade_maior_mulher = idade_mulher_A;
                idade_menor_mulher = idade_mulher_B;
            } else {
                idade_maior_mulher = idade_mulher_B;
                idade_menor_mulher = idade_mulher_A;
            }
            let soma_idades = idade_maior_homem + idade_menor_mulher
            let produto_idades = idade_menor_homem * idade_maior_mulher
            alert(`A soma entre a maior idade do homem com a menor idade mulher é: ${soma_idades}`)
            alert(`O produto entre a menor idade do homem com a maior da mulher é: ${produto_idades}`)
    }
})

/* 37.0 */
document.getElementById("botao-31").addEventListener("click", () => {
    //
    let quantidade_kg_maça = parseInt(prompt("Digite a quantidade de maçãs, em Kg, que vai comprar: "))
    let quantidade_kg_morango = parseInt(prompt("Digite a quantidade de morango, em Kg, que vai comprar: "))
    //
    let compra_total = 0
    let quantidade_kg_final = (quantidade_kg_morango + quantidade_kg_maça)
    //
    let morangos_total = (quantidade_kg_morango > 5) ? quantidade_kg_morango * 2.2 : quantidade_kg_morango * 2.5
    //
    let maças_total = quantidade_kg_maça > 5 ? quantidade_kg_maça * 1.5 : quantidade_kg_maça * 1.8
    //
    compra_total = maças_total + morangos_total
    if (quantidade_kg_final > 8 || compra_total > 25) compra_total -= (compra * 0.10)

    alert(`O preço final será: ${compra_total}`)
})

/* 38.0 Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja 
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a 
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se 
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a 
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. */
document.getElementById("botao-32").addEventListener("click", () => {
    //
    const codigo_armazenado = 1234
    const senha_armazenada = 9999
    //
    let ler_codigo = parseInt(prompt("Digite o código correto de acesso: "))
    //
    if (codigo_armazenado === ler_codigo) {
        alert("Usuário aceito.")
        let senha = parseInt(prompt("Digite a senha correta de acesso!"))
        switch (true) {
            case senha === senha_armazenada:
                alert("Senha correta!")
                break
            case senha !== senha_armazenada:
                alert("Senha incorreta!")
                break
            default:
                alert("Indefinido.")
        }
    } else {
        alert("Usuário negado.")
    }
})

/* 40.0 Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: 
 - Se quantidade <= 5 o desconto será de 2% 
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
 - Se quantidade > 10 o desconto será de 5%  */
document.getElementById("botao-33").addEventListener("click", () => {
    //
    const nome_produto = prompt("Digite o nome do produto: ");
    let quantidade_produto = parseInt(prompt("Digite a quantidade do produto: "));
    let preco_produto = parseInt(prompt("Digite o preço do produto: "))
    alert(`Produto: ${nome_produto},\nQuantidade: ${quantidade_produto},\nPreço: R$ ${preco_produto}.`)
    alert(`Total: ${quantidade_produto * preco_produto}`)
    switch (true) {
        case (quantidade_produto <= 5):
            alert(`Novo preço: ${preco_produto * (98 / 100)}`)
            break
        case (quantidade_produto > 5 && quantidade_produto <= 10):
            alert(`Novo preço de: ${preco_produto * (97 / 100)}`)
            break
        case (quantidade_produto >= 11):
            alert(`Novo preço: ${preco_produto * (95 / 100)}`)
            break
    }
    //

})

/* 41.0 */
document.getElementById("botao-34").addEventListener("click", () => {
    //
    let nota1 = parseInt(prompt("Digite a primeira nota: "));
    let nota2 = parseInt(prompt("Digite a segunda nota: "));
    let nota3 = parseInt(prompt("Digite a terceira nota: "));
    let exercicios_quantidade = parseInt(prompt("No total, quantos exercícios você realizou? "));
    //
    let nota_exercicios, media_aritmetica, total = 0
    for (let i = 0; i < exercicios_quantidade; i++) {
        nota_exercicios = parseInt(prompt("Digite, de forma consecutiva, as respectivas notas: "))
        total = total + nota_exercicios

        if (i === exercicios_quantidade - 1) {
            media_aritmetica = (total / exercicios_quantidade)
            alert(`Sua média aritmética é: ${media_aritmetica}`)
        }
    }
    //
    let media_de_aproveitamento = ((nota1) + (nota2 + 2) + (nota3 * 3) + media_aritmetica) / 7
    //
    switch (true) {
        case (media_de_aproveitamento >= 9):
            alert(`Média de aproveimento: ${media_de_aproveitamento.toFixed(2)} Conceito A`);
            break
        case (media_de_aproveitamento < 9 && media_de_aproveitamento >= 7.5):
            alert(`Média de aproveimento: ${media_de_aproveitamento.toFixed(2)} Conceito B`);
            break
        case (media_de_aproveitamento < 7.5 && media_de_aproveitamento >= 6.0):
            alert(`Média de aproveimento: ${media_de_aproveitamento.toFixed(2)} Conceito C`);
            break
        case (media_de_aproveitamento < 6):
            alert(`Média de aproveimento: ${media_de_aproveitamento.toFixed(2)} Conceito D`);
            break
        default:
            alert("Indefinido.")
    }
})

/* 42.0 Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos seguintes requisitos deve ser satisfeito: 
 - Ter no mínimo 65 anos de idade. 
 - Ter trabalhado no mínimo 30 anos. 
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
*/
document.getElementById("botao-35").addEventListener("click", () => {
    //
    const numero_empregado = parseInt(prompt("Digite o seu número: "));
    let ano_nascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
    let ano_atual = parseInt(prompt("Digite o ano atual: "))
    let ano_contrato = parseInt(prompt("Digite o ano que você foi contratado: "))
    //
    let idade = ano_atual - ano_nascimento
    let anos_de_empresa = ano_atual - ano_contrato
    alert(`Você tem ${idade} anos de idade.\nAlém disso, você tem ${anos_de_empresa} anos de colaboração.`)
    //
    switch (true) {
        case (idade >= 65):
            alert(`Aposentadoria concedida.`)
            break
        case (anos_de_empresa >= 30):
            alert(`Aposentadoria concedida.`)
            break
        case (idade >= 60 && anos_de_empresa >= 25):
            alert(`Aposentadoria concedida.`)
            break
        default:
            alert("Aposentadoria negada.")
    }
    //
})

/*  */