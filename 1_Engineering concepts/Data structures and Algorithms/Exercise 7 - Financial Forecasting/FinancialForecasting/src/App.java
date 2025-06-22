// App.java
public class App {

    public static double forecastRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecastRecursive(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static double forecastIterative(double currentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + growthRate);
        }
        return currentValue;
    }

    public static void main(String[] args) {
        double initialValue = 10000.0;
        double annualGrowthRate = 0.08; // 8% growth per year
        int years = 5;

        double futureValueRecursive = forecastRecursive(initialValue, annualGrowthRate, years);
        System.out.printf("Future value using recursion after %d years: ₹%.2f%n", years, futureValueRecursive);

        double futureValueIterative = forecastIterative(initialValue, annualGrowthRate, years);
        System.out.printf("Future value using iteration after %d years: ₹%.2f%n", years, futureValueIterative);
    }
}
