// BinarySearch.java
import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static Product searchById(Product[] products, int id) {

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
