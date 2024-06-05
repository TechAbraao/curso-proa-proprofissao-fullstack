/*
 * Professor: Jailson Costa dos Santos
 * Autor: Abraão Vitor Silva Santos
 */

import java.util.Scanner;
import java.util.Locale;

public class Exercicios {
    /* (1) */
    public static void ParImpar() {
        Scanner Scanner = new Scanner(System.in);
        int valorNumero;

        System.out.print("Digite um número qualquer: ");
        valorNumero = Scanner.nextInt();

        if (valorNumero % 2 == 0) {
            System.out.printf("O número %d é par.\n", valorNumero);
        } else {
            System.out.printf("\nO número %d é ímpar.", valorNumero);
        };

        Scanner.close();
    };

    /* (2) */
    public static void PositivoNegativo() {
        Scanner Scanner = new Scanner(System.in);
        int valorNumero;

        System.out.print("Digite um número qualquer: ");
        valorNumero = Scanner.nextInt();

        if (valorNumero > 0) {
            System.out.println("O valor digitado é positivo.");
        } else if (valorNumero == 0) {
            System.out.println("O valor digitado não é positivo e nem negativo.");
        } else {
            System.out.println("O valor digitado é negativo.");
        };

        Scanner.close();
    }
    /* (3) */
    public static void MaiorNumero() {
        Scanner Scanner = new Scanner(System.in);
        int primeiroNumero, segundoNumero;

        System.out.print("Digite o valor do primeiro número: ");
        primeiroNumero = Scanner.nextInt();
        System.out.print("Digite o valor do segundo número: ");
        segundoNumero = Scanner.nextInt();

        if (primeiroNumero > segundoNumero) {
            System.out.println("O primeiro número e maior que o segundo número.");
        } else if (primeiroNumero == segundoNumero) {
            System.out.println("Ambos números são iguais.");
        } else {
            System.out.println("O segundo número é maior que o primeiro número.");
        };

        Scanner.close();
    };

    /* (4) */
    public static void TrianguloValido() {
        Scanner Scanner = new Scanner(System.in);
        int ladoA, ladoB, ladoC;

        System.out.print("Digite os lados de um triângulo, de forma consecutiva, e verifique se formam um triângulo válido: ");
        ladoA = Scanner.nextInt();
        ladoB = Scanner.nextInt();
        ladoC = Scanner.nextInt();

        if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
            System.out.println("Os valores digitados são válidos para existir um triângulo. ");
        } else {
            System.out.println("Os valores digitados são inválidos para existir um triângulo. ");
        };

        Scanner.close();
    };

    /* (5) */
    public static void MediaAlunos() {
        Scanner Scanner = new Scanner(System.in);
        float notaUm, notaDois, notaTres, media;

        System.out.print("Digite a primeira nota: ");
        notaUm = Scanner.nextFloat();
        System.out.print("Digite a segunda nota: ");
        notaDois = Scanner.nextFloat();
        System.out.print("Digite a terceira nota: ");
        notaTres = Scanner.nextFloat();
        media = (notaUm + notaDois + notaTres) / 3;

        if (media >= 7) {
            System.out.printf("Parabéns, aprovado com média %.2f", media);
        } else if (5 >= media && media < 7) {
            System.out.printf("Encontra-se em recuperação com média %.2f", media);
        } else {
            System.out.printf("Reprovado com média %.2f", media);
        };

        Scanner.close();
    };

    /* (6) */
    public static void AnoBissexto() {
        Scanner Scanner = new Scanner(System.in);
        int ano;

        System.out.print("Digite um ano qualquer: ");
        ano = Scanner.nextInt();

        if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
            System.out.printf("O ano %d é bissexto.", ano);
        } else {
            System.out.printf("O ano %d não é bissexto.", ano);
        }

        Scanner.close();
    }

    /* (7) */
    public static void IdadePessoa() {
        Scanner Scanner = new Scanner(System.in);
        int idade;

        System.out.print("Digite uma idade qualquer: ");
        idade = Scanner.nextInt();

        if (idade > 0 && idade <= 12) {
            System.out.println("Você é uma criança!");
        } else if (idade >= 13 && idade <= 17) {
            System.out.println("Você é um adolescente!");
        } else if (idade >= 18 && idade <= 59) {
            System.out.println("Você é um adulto!");
        } else if (idade >= 60) {
            System.out.println("Você é idoso!");
        } else {
            System.out.print("Idade inválida.");
        }

        Scanner.close();
    }

    /* (8) */
    public static void NotaConceito() {
        Scanner Scanner = new Scanner(System.in);
        int nota;

        System.out.print("Digite uma nota qualquer: ");
        nota = Scanner.nextInt();

        if (nota >= 9) {
            System.out.print("Conceito A.");
        } else if (nota >= 7) {
            System.out.print("Conceito B.");
        } else if (nota >= 5) {
            System.out.print("Conceito C.");
        } else if (nota >= 3) {
            System.out.print("Conceito D.");
        } else if (nota >= 0) {
            System.out.print("Conceito F.");
        } else {
            System.out.print("Nota digitada inválida.");
        }

        Scanner.close();
    }

    /* (9) */
    public static void CategoriaProduto() {
        Scanner Scanner = new Scanner(System.in);
        int codigo;

        System.out.print("Digite o código do produto: ");
        codigo = Scanner.nextInt();

        if (codigo >= 1 && codigo <= 10) {
            System.out.println("Categoria: Alimento não-perecível");
        } else if (codigo >= 11 && codigo <= 20) {
            System.out.println("Categoria: Alimento perecível");
        } else if (codigo >= 21 && codigo <= 30) {
            System.out.println("Categoria: Vestuário");
        } else if (codigo >= 31 && codigo <= 40) {
            System.out.println("Categoria: Eletrônicos");
        } else {
            System.out.println("Código inválido");
        }

        Scanner.close();
    }

    /* (10) */
    public static void OperacaoMatematica () {
        Scanner Scanner = new Scanner(System.in);
        int operacao;
        float numeroUm, numeroDois, resultado;

        System.out.print("\nRealize as principais operações matemáticas:\n");
        System.out.println("1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão");
        operacao = Scanner.nextInt();

        switch (operacao) {
            case 1:
                System.out.println("Digite dois valores para realizar a adição.");
                numeroUm = Scanner.nextFloat();
                numeroDois = Scanner.nextFloat();

                resultado = (numeroUm + numeroDois);
                System.out.printf("\n%.2f + %.2f = %.2f", numeroUm, numeroDois, resultado);

                break;
            case 2:
                System.out.println("Digite dois valores para realizar a subtração.");
                numeroUm = Scanner.nextFloat();
                numeroDois = Scanner.nextFloat();

                resultado = (numeroUm - numeroDois);
                System.out.printf("\n%.2f - %.2f = %.2f", numeroUm, numeroDois, resultado);

                break;
            case 3:
                System.out.println("Digite dois valores para realizar a multiplicação.");
                numeroUm = Scanner.nextFloat();
                numeroDois = Scanner.nextFloat();

                resultado = (numeroUm * numeroDois);
                System.out.printf("\n%.2f * %.2f = %.2f", numeroUm, numeroDois, resultado);

                break;
            case 4:
                System.out.println("Digite dois valores para realizar a divisão.");
                numeroUm = Scanner.nextFloat();
                numeroDois = Scanner.nextFloat();

                resultado = (numeroUm / numeroDois);
                System.out.printf("\n%.2f / %.2f = %.2f", numeroUm, numeroDois, resultado);

                break;
            default:
                System.out.println("Valor inválido!");
        }

        Scanner.close();
    }

    /* (11) */
    public static void VerificarIntervalo () {
        Scanner Scanner = new Scanner(System.in);
        int numero;

        System.out.println("Digite um número qualquer: ");
        numero = Scanner.nextInt();

        if (numero > 9 && numero < 21) {
            System.out.println("Número corresponde ao intervalo.");
        } else {
            System.out.println("Número não corresponde ao intervalo.");
        }

        Scanner.close();
    }
}
