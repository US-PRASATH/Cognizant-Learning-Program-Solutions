// App.java
public class App {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Footwear"),
            new Product(150, "Watch", "Accessories"),
            new Product(330, "Phone", "Electronics"),
            new Product(410, "Bag", "Fashion")
        };

        System.out.println(" Linear Search:");
        Product result1 = LinearSearch.searchById(products, 150);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\n Binary Search:");
        Product result2 = BinarySearch.searchById(products, 330);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
