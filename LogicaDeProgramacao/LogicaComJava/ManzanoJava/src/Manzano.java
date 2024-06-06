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

    }
}
