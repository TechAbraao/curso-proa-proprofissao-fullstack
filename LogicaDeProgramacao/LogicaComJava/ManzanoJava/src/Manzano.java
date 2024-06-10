import java.util.Scanner;
import java.util.Locale;

public class Manzano {
    // 7.A
    public static void CelsiusParaFahrenheit() {
        Scanner Input = new Scanner(System.in);
        Locale.setDefault(Locale.US);
        float valueCelsius, valueFahrenheit;
        //
        System.out.print("Digite o valor em Graus Celsius: ");
        valueCelsius = Input.nextFloat();
        //
        valueFahrenheit = ((9 * valueCelsius + 160) / 5);
        System.out.printf("O valor em Fahrenheit é: %.2f", valueFahrenheit);
    }

    // 7.B
    public static void FahrenheitParaCelsius() {
        Scanner Input = new Scanner(System.in);
        Locale.setDefault(Locale.US);
        double valueCelsius, valueFahrenheit;
        //
        System.out.print("Digite o valor em Graus Fahrenheit");
        valueFahrenheit = Input.nextDouble();
        //
        valueCelsius = ((valueFahrenheit - 32.0) * (5.0 / 9.0));
        System.out.printf("A conversão de Fahrenheit para Celsius é: %.2f", valueCelsius);
    }

    // 7.C
    public static void VolumeLata() {
        Scanner Input = new Scanner(System.in);
        double volume, altura, raio;
        //
        System.out.println("Digite o valor da altura: ");
        altura = Input.nextDouble();
        System.out.println("Digite o valor do raio: ");
        raio = Input.nextDouble();
        //
        volume = Math.PI * (raio * raio) * altura;
        System.out.printf("O volume da lata de óleo é: %.2f", volume);
        //
    }
    // 7.D
    public static void VelocidadeLitros () {
        Scanner Input = new Scanner(System.in);
        
    }

    // 7.E
    public static void PrestacaoAtraso () {
        Scanner Input = new Scanner(System.in);
        float prestacao, valor, taxa, tempo;

        System.out.print("Digite o valor da fatura: ");
        valor = Input.nextFloat();
        System.out.print("Digite a taxa de juros: ");
        taxa = Input.nextFloat();
        System.out.print("Digite o tempo de atraso: ");
        tempo = Input.nextFloat();

        prestacao = valor + (valor *(taxa/100) * tempo);
        System.out.printf("O valor com juros é: %.2f", prestacao);

        Input.close();
    }

    // 7.F
    public static void TrocaValores() {
        Scanner input = new Scanner(System.in);
        int A, B, ATroca, BTroca;

        System.out.print("Digite o valor de A: ");
        A = input.nextInt();
        System.out.print("Digite o valor de B: ");
        B = input.nextInt();

       ATroca = A;
       BTroca = B;

    }


    // Estrutura de Repetição em Java (5.1.1)

    // A.
    public static void TabuadaUmAoDez() {
        Scanner Input = new Scanner(System.in);
        int valorTabuada, i;
        //
        System.out.print("Digite o número que deseja obter a tabuada do 1 ao 10. ");
        valorTabuada = Input.nextInt();
        System.out.printf("A tabuada até o dez do número %d é: ", valorTabuada);
        //
        i = 1;
        while (i < 11) {
            int res = i * valorTabuada;
            System.out.printf("%n%d x %d = %d", i, valorTabuada, res);
            i++;
        }
    }

    // B.
    public static void SomaCemWhile() {
        int i, soma;
        soma = 0;
        i = 1;

        while (i < 101) {
            soma = soma + i;
            i++;
        }

        System.out.printf("A soma dos cem primeiros números é: %d", soma);
    }

    // C.
    public static void SomaQuinhentosFor () {
        int i, soma;
        soma = 0;

        for (i = 1; i < 501; i++) {
            soma += i;
        }

        System.out.printf("A soma dos 500 números é: %d", soma);
    }

    // C.
    public static void SomaParesQuinhentos () {
        int soma = 0;

        for (int i = 1; i < 501; i++) {
            if (i % 2 == 0) {
                soma += 1;
            }
        }
        System.out.printf("O somatório dos valores pares de 1 a 500 é: %d%n", soma);
    }
}
