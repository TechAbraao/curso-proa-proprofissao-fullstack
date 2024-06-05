/* Para efetuar o cálculo da área de uma circunferência é necessário conhecer a fórmula que executa este 
cálculo, sendo esta: 2 A = π.R , em que A é a variável que conterá o resultado do cálculo da área, π é o 
valor de PI (3.14159, sendo uma constante na fórmula) e R o valor do raio. Sendo assim, basta estabelecer: 
1. Ler um valor para o raio, no caso variável R; 
2. Estabelecer que π possui o valor de 3.14159; 
3. Efetuar o cálculo da área, elevando ao quadrado o valor de R e multiplicando por π ; 
4. Apresentar o valor da variável A. */
document.getElementById("botao-1").addEventListener("click", () => {
       //
       let raio_circulo = parseInt(prompt("Digite o raio do circulo que deseja obter a área, em metros: "));
       //
       const pi = Math.PI;
       let area_circulo = pi * Math.pow(raio_circulo, 2);
       //
       alert(`A área do circulo é: ${area_circulo.toFixed(2)} m²`);
       //
})
/* Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F = (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
document.getElementById("botao-2").addEventListener("click", () => {
       //
       let temp_celsius = parseInt(prompt("Digite uma temperatura em graus celsius: "));
       let temp_fahrenheit = (9 * temp_celsius + 160) / 5;
       //
       alert(`A conversão de ${temp_celsius} °C para Fahrenheit é: ${temp_fahrenheit} °F`);
})

/* Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
conversão é C = (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. */
document.getElementById("botao-3").addEventListener("click", () => {
       //
       let temp_fahrenheit = parseInt(prompt("Digite uma temperatura em graus fahrenheit: "));
       let temp_celsius = (temp_fahrenheit - 32) * (5 / 9);
       //
       alert(`A conversão de ${temp_fahrenheit} °F para Celsius é: ${temp_celsius.toFixed(2)} °C`);
})

/*Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume * Raio ao quadrado * Altura */
document.getElementById("botao-4").addEventListener("click", () => {
       //
       let altura_lata = parseInt(prompt("Digite a altura da lata, em metros: "));
       let raio_lata = parseInt(prompt("Digite o raio da lata, em metros: "));
       const pi = Math.PI;
       //
       let volume_lata = (pi * Math.pow(raio_lata, 2) * altura_lata);
       //
       alert(`O volume da lata é: ${volume_lata.toFixed(2)} m³`);
})
/* Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem. */
document.getElementById("botao-5").addEventListener("click", () => {
       //
       let tempo_locomocao = parseInt(prompt("Digite o tempo total de locomoção, em horas: "));
       let velocidade_media = parseInt(prompt("Digite a velocidade média, em km/h: "));
       //
       let distasncia_locomocao = (tempo_locomocao * velocidade_media);
       let litros_usados = (distasncia_locomocao / 12);
       //
       alert(`Tempo total: ${tempo_locomocao}h\nVelocidade média: ${velocidade_media}Km/h\nDistância percorrida: ${distasncia_locomocao}Km\nLitros utilizados: ${litros_usados.toFixed(2)}L`);
})
/* Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).  */
document.getElementById("botao-6").addEventListener("click", () => {
       //
       let valor_prestacao = parseInt(prompt("Digite o valor da prestação, em reais: "));
       let porcentual_prestacao = parseInt(prompt("Digite o porcentual da taxa: "));
       let atraso_prestacao = parseInt(prompt("Digite o tempo de atraso: "));
       //
       let prestacao = valor_prestacao + (valor_prestacao * (porcentual_prestacao / 100) * atraso_prestacao);
       alert(`Reajuste do valor inicial. Valor atual a ser pago: ${prestacao}`)
})

/* Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados */
document.getElementById("botao-7").addEventListener("click", () => {
       //
       let A = parseInt(prompt("Digite o primeiro valor (A): "));
       let B = parseInt(prompt("Digite o segundo valor (B): "));
       alert(`(A) = ${A} e (B) = ${B}`)
       //
       let C, D = 0;
       C = B;
       D = A;
       A = C;
       B = D;
       alert(`O (A) torna-se ${C} e (B) torna-se ${D}`)
       //
})

/* Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.  */
document.getElementById("botao-8").addEventListener("click", () => {
       //
       let A = parseInt(prompt("Digite o valor de A: "));
       let B = parseInt(prompt("Digite o valor de B: "));
       let C = parseInt(prompt("Digite o valor de C: "));
       let D = parseInt(prompt("Digite o valor de D: "));
       //
       let adicAB, adicAC, adicAD, adicBC, adicBD, adicCD;
       let multAB, multAC, multAD, multBC, multBD, multCD;
       //
       adicAB = (A + B); adicAC = (A + C); adicAD = (A + D);
       adicBC = (B + C); adicBD = (B + D); adicCD = (C + D);
       alert(`A + B = ${adicAB}\nA + C = ${adicAC}\nA + D = ${adicAD}\nB + C = ${adicBC}\nB + D = ${adicBD}\nC + D = ${adicCD}`);
       //
       multAB = (A * B); multAC = (A * C); multAD = (A * D);
       multBC = (B * C); multBD = (B * D); multCD = (C * D);
       alert(`A * B = ${multAB}\nA * C = ${multAC}\nA * D = ${multAD}\nB * C = ${multBC}\nB * D = ${multBD}\nC * D = ${multCD}`);
       //
})

/* Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME = COMPRIMENTO * LARGURA * ALTURA. */
document.getElementById("botao-9").addEventListener("click", () => {
       //
       let comprimento = parseInt(prompt("Digite o comprimento da caixa retangular, em metros: "));
       let largura = parseInt(prompt("Digite a largura da caixa retangular, em metros: "));
       let altura = parseInt(prompt("Digite a altura da caixa retangular, em metros: "));
       //
       let volume = (comprimento * largura * altura);
       alert(`O volume da caixa retangular é: ${volume} m³`)
})

/* Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo. */
document.getElementById("botao-10").addEventListener("click", () => {
       //
       let A = parseInt(prompt("Digite o primeiro número: "))
       let B = parseInt(prompt("Digite o segundo número: "))
       //
       let diferenca = A - B;
       let quadrado_diferenca = Math.pow(diferenca, 2);
       //
       alert(`O quadrado da diferença é: ${quadrado_diferenca}`)
})

/* Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira. */
document.getElementById("botao-11").addEventListener("click", () => {
       //
       let qnt_dolar = parseInt(prompt("Digite quantos dólares você dispõe: "));
       let cotacao_dolar = parseFloat(prompt("Digite a cotação atual do dólar: "));
       //
       let total_reais = (qnt_dolar * cotacao_dolar);
       alert(`Convertendo ${qnt_dolar} dólares em reais, você tem: R$ ${total_reais}`)
})

/* Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana. */
document.getElementById("botao-12").addEventListener("click", () => {
       //
       let qnt_reais = parseFloat(prompt("Digite quantos reais você dispõe: "));
       let cotacao_dolar = parseFloat(prompt("Digite a cotação atual do dólar: "));
       //
       let total_reais = (qnt_reais / cotacao_dolar);
       alert(`Convertendo ${qnt_reais} reais em dólares, você tem: R$ ${total_reais}`)
       //
})

/* Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos. */
document.getElementById("botao-13").addEventListener("click", () => {
       //
       let A = parseInt(prompt("Digite o primeiro número: "));
       let B = parseInt(prompt("Digite o segundo número: "));
       let C = parseInt(prompt("Digite o terceiro número: "));
       //
       let quadA, quadB, quadC, soma_quadrados;
       quadA = (A * A);
       quadB = (B * B);
       quadC = (C * C);
       soma_quadrados = (quadA + quadB + quadC);
       //
       alert(`A soma dos quadrado: ${soma_quadrados}`);
})

/* Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o 
quadrado da soma dos três valores lidos. */
document.getElementById("botao-14").addEventListener("click", () => {
       //
       let A = parseInt(prompt("Digite o primeiro número: "));
       let B = parseInt(prompt("Digite o segundo número: "));
       let C = parseInt(prompt("Digite o terceiro número: "));
       //
       let soma_numeros, quadrado_soma_numeros;
       soma = (A + B + C);
       quadrado_soma_numeros = (soma * soma);
       //
       alert(`Quadrado da soma dos três números: ${quadrado_soma_numeros}`)

})

/* Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor. */
document.getElementById("botao-15").addEventListener("click", () => {
       //
       let valor1 = parseInt(prompt("Digite o primeiro número: "))
       let valor2 = parseInt(prompt("Digite o segundo número: "))
       //
       if (valor1 > valor2) {
              alert(`A diferença do maior pelo menor: ${valor1 - valor2}`)
       } else {
              alert(`A diferença do maior pelo menor: ${valor2 - valor1}`)
       }
       //
})

/* Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. */
document.getElementById("botao-16").addEventListener("click", () => {
       //
       let numero = parseInt(prompt("Digite um número qualquer e descubra seu módulo: "))
       //
       if (numero > 0) {
              alert(`O módulo de ${numero} é ${numero}`)
       } else {
              alert(`O módulo de ${numero} é ${numero * (-1)}`)
       }
       //
})

/* Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não 
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o 
valor da média do aluno para qualquer condição. */
document.getElementById("botao-17").addEventListener("click", () => {
       //
       let valor1 = parseInt(prompt("Digite a primeira nota: "));
       let valor2 = parseInt(prompt("Digite a segunda nota: "));
       let valor3 = parseInt(prompt("Digite a terceira nota: "));
       let valor4 = parseInt(prompt("Digite a quarta nota: "));
       //
       let media = (valor1 + valor2 + valor3 + valor4) / 4;
       if (media >= 5) {
              alert(`Aluno aprovado com média ${media}`);
       } else {
              alert(`Aluno reprovado com média ${media}`);
       }
})

/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */
document.getElementById("botao-18").addEventListener("click", () => {
       //
       let valor1 = parseInt(prompt("Digite a primeira nota: "));
       let valor2 = parseInt(prompt("Digite a segunda nota: "));
       let valor3 = parseInt(prompt("Digite a terceira nota: "));
       let valor4 = parseInt(prompt("Digite a quarta nota: "));
       //
       let media = (valor1 + valor2 + valor3 + valor4) / 4;
       //
       if (media >= 7) {
              alert(`Aluno aprovado com média ${media}`);
       } else {
              let nota_recuperacao = parseInt(prompt("Digite a nova nota do exame, que será somada a media: "));
              nova_media = media + nota_recuperacao;
              if (nova_media >= 5) {
                     alert(`Aluno aprovado com nova média de ${nova_media}`);
              } else {
                     alert(`Aluno reprovado com nova média de ${nova_media}`);
              };
       };
})

/* Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de 
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. */
document.getElementById("botao-19").addEventListener("click", () => {
       //
       let A, B, C;
       A = parseInt(prompt("Digite o valor do coeficiente 'a', sabendo que a > 0. "));
       B = parseInt(prompt("Digite o valor do coeficiente 'b' "));
       C = parseInt(prompt("Digite o valor do coeficiente 'c' "));
       //
       switch (true) {
              case (A === 0):
                     alert("O coeficiente 'a' não pode ser igual a zero.");
                     break
              case (A !== 0):
                     let discriminante = (Math.pow(B, 2) - (4 * A * C));
                     if (discriminante < 0) {
                            alert("A equação não tem raízes que pertencem ao conjunto dos reais.");
                     } else if (discriminante === 0) {
                            let raiz = -B / (2 * A);
                            alert(`A equação tem uma única raiz, sendo ela: ${raiz}`)
                     } else {
                            let raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A)
                            let raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A)
                            alert(`A equação tem duas raizes, sendo elas: X1 = ${raiz1} e X2 = ${raiz2}`)
                     }
       }
})


/* Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. */
document.getElementById("botao-20").addEventListener("click", () => {
       //
       let N1, N2, N3;
       N1 = parseInt(prompt("Digite o primeiro número: "));
       N2 = parseInt(prompt("Digite o segundo número: "));
       N3 = parseInt(prompt("Digite o terceiro número: "));
       //
       if (N1 <= N2 && N2 <= N3) {
              alert(`A ordem crescente dos números: ${N1}, ${N2}, ${N3}`);
       } else if (N1 <= N3 && N3 <= N2) {
              alert(`A ordem crescente dos números: ${N1}, ${N3}, ${N2}`);
       } else if (N2 <= N1 && N1 <= N3) {
              alert(`A ordem crescente dos números: ${N2}, ${N1}, ${N3}`);
       } else if (N2 <= N3 && N3 <= N1) {
              alert(`A ordem crescente dos números: ${N2}, ${N3}, ${N1}`);
       } else if (N3 <= N1 && N1 <= N2) {
              alert(`A ordem crescente dos números: ${N3}, ${N1}, ${N2}`);
       } else {
              alert(`A ordem crescente dos números: ${N3}, ${N2}, ${N1}`);
       }
})

/* Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. */
document.getElementById("botao-21").addEventListener("click", () => {
       //
       let num1 = parseInt(prompt("Digite o primeiro número: "));
       let num2 = parseInt(prompt("Digite o segundo número: "));
       let num3 = parseInt(prompt("Digite o terceiro número: "));
       let num4 = parseInt(prompt("Digite o quarto número: "));

       let divisivel = false;

       if (num1 % 2 === 0 && num1 % 3 === 0) {
              alert(num1);
              divisivel = true;
       }
       if (num2 % 2 === 0 && num2 % 3 === 0) {
              alert(num2);
              divisivel = true;
       }
       if (num3 % 2 === 0 && num3 % 3 === 0) {
              alert(num3);
              divisivel = true;
       }
       if (num4 % 2 === 0 && num4 % 3 === 0) {
              alert(num4);
              divisivel = true;
       }

       if (!divisivel) {
              alert("Nenhum dos números digitados é divisível por 2 e 3.");
       }
})

/* Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. */
document.getElementById("botao-22").addEventListener("click", () => {
       //
       let num1, num2, num3, num4, num5, maior, menor;
       num1 = parseInt(prompt("Digite o primeiro valor: "));
       num2 = parseInt(prompt("Digite o segundo valor: "));
       num3 = parseInt(prompt("Digite o terceiro valor: "));
       num4 = parseInt(prompt("Digite o quarto valor: "));
       num5 = parseInt(prompt("Digite o quinto valor: "));
       //
       maior = num1;
       menor = num1;
       if (num2 > maior) {
              maior = num2
       } else if (num2 < menor) {
              menor = num2
       }
       if (num3 > maior) {
              maior = num3
       } else if (num3 < menor) {
              menor = num3
       }
       if (num4 > maior) {
              maior = num4
       } else if (num4 < menor) {
              menor = num4
       }
       if (num5 > maior) {
              maior = num5
       } else if (num5 < menor) {
              menor = num5
       }
       alert(`O maior número é: ${maior} e o menor é: ${menor}`);
})

/* Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem 
informando se o número é par ou ímpar.  */
document.getElementById("botao-23").addEventListener("click", () => {
       //
       let numero = parseInt(prompt("Digite um número qualquer e descubra se par ou ímpar: "));
       //
       if (numero % 2 === 0) {
              alert("O número digitado é par.");
       } else {
              alert("O número digitado é ímpar.");
       }
})

/* Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a
leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O 
valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor 
está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9. 
*/
document.getElementById("botao-24").addEventListener("click", () => {
       //
       let numero = parseInt(prompt("Digite um valor que corresponda ao intervalo 1 <= x <= 9. "));
       //
       if (numero >= 1 && numero <= 9) {
              alert("O valor está na faixa permitida!")
       } else {
              alert("O valor está fora da faixa permitida!")
       }
})

/* Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua 
apresentação, caso o valor não seja maior que três. */
document.getElementById("botao-25").addEventListener("click", () => {
       //
       let numero = parseInt(prompt("Digite um número qualquer: "))
       //
       if (numero <= 3) {
              alert(`Número não é maior que três.`)
       } else {
              alert(`Número maior que três.`)
       }
})

/* Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com 
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a 
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da 
mensagem de saudação o nome previamente informado. */
document.getElementById("botao-26").addEventListener("click", () => {
       //
       let primeiro_nome = prompt("Digite seu nome: ");
       let sexo = prompt("Digite seu sexo (Masculino - M / Feminino - F): ");
       //
       if (sexo === "M" || sexo === "F") {
              switch (true) {
                     case (sexo === "M"):
                            alert(`Seja bem-vindo Ilmo Sr. ${primeiro_nome}`);
                            break
                     case (sexo === "F"):
                            alert(`Seja bem-vindo Ilma Sra. ${primeiro_nome}`);
                            break
                     default:
                            alert("Valores indefinidos.");
                            break
              }
       } else[
              alert(`O sexo ${sexo} não corresponde a nenhuma das alternativas.`)
       ]
})

/* Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */
document.getElementById("botao-27").addEventListener("click", () => {
       //
       let multiplicador = parseInt(prompt("Escolha um número para obter a tabuada desse respectivo número do 1 até o 10: "));
       //
       for (let x = 1; x <= 10; x++) {
              let tab = multiplicador * x;
              alert(`Tabuada: ${x}x${multiplicador} = ${tab}`)
              //
       }
})
/* Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */
document.getElementById("botao-28").addEventListener("click", () => {
       //
       let index = 1;
       let soma = 0;
       //
       while (index <= 100) {
              console.log(`${soma} + ${index} = ${soma + index}`);
              soma += index;
              index++;
       }
       alert(`Soma dos cem primeiros números: ${soma}`);
})

/* Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar 
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução 
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. */
document.getElementById("botao-29").addEventListener("click", () => {
       //
       for (let x = 0; x <= 20; x++) {
              if (x % 2 !== 0) {
                     alert(`Número ímpar: ${x}`);
              }
       }
})
/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500. */
document.getElementById("botao-30").addEventListener("click", () => {
       //]
       let index = 1;
       let soma = 0;
       //
       while (index <= 500) {
              if (index % 2 === 0) {
                     console.log(`${soma} + ${index} = ${soma + index}`);
                     soma += index;
              }
              index++;
       }
       //
       alert(`A somatória dos pares entre 0 a 500 é: ${soma}`)
})
/* Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).  */
document.getElementById("botao-31").addEventListener("click", () => {
       let expoente, index = 0;
       const base = 3;
       //
       while (index <= 15) {
              if (index === 0) {
                     expoente = 1;
              } else {
                     expoente *= base;
                     console.log(`${base}^${index} = ${expoente}`);
              }
              index++;
       }
       alert("Confere no console - DevTools")
})

/* Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor 
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
portuguol (^).  */
document.getElementById("botao-32").addEventListener("click", () => {
       //
       let valor = parseInt(prompt("Digite a Base: "));
       let expoente = parseInt(prompt("Digite o Expoente: "));

       let index = 0;
       let elevado = 1;

       console.clear();
       while (index <= expoente) {
           if (index === 0) {
               elevado = 1;
           } else {
               elevado *= valor;
           }
           console.log(`${valor} elevado a ${index} = ${elevado}`);
           index++;
       }
      alert("Confere no DevTools!")
       //
})
/* Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de 
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza 
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo 
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo 
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. */
document.getElementById("botao-33").addEventListener("click", () => {
       //
             let n1 = 0,
                n2 = 1,
                count = 0,
                nth;

            console.clear();
            while (count < 15) {
                if (count === 0) {
                    nth = 0;
                } else if (count === 1) {
                    nth = 1;
                } else {
                    nth = n1 + n2;
                    n1 = n2;
                    n2 = nth;
                }
                console.log(`Passo ${count + 1}º: ${nth}`);
                count++;
            }

            alert("Confere no DevTools!")
})
/* Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é
5
9 +160
=
C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.  */
document.getElementById("botao-34").addEventListener("click", () => {
       //
       let grausCelsius = 10;
       let index = 0;

       console.clear();
       while (index < 10) {
           let grausFahren = (9 * grausCelsius + 160) / 5;
           console.log(`${grausCelsius}º em Fahrenheit: ${grausFahren}`);

           grausCelsius += 10;
           index++;
       }
       alert("Confere no DevTools!")
       //
})

/* Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos.  */
document.getElementById("botao-35").addEventListener("click", () => {
       //
       let num, somatoria = 0, index = 1;
            while (index <= 10) {
                num = parseFloat(prompt(`Digite o ${index}º valor:`));
                somatoria += num;
                index++;
            }

            alert(`Média dos volores: ${somatoria / 10}`);
})

/* Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70. */
document.getElementById("botao-32").addEventListener("click", () => {
       
})