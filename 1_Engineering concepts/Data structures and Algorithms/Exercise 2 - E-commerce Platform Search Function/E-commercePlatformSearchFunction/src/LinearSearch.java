// LinearSearch.java
public class LinearSearch {
    public static Product searchById(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }
}
