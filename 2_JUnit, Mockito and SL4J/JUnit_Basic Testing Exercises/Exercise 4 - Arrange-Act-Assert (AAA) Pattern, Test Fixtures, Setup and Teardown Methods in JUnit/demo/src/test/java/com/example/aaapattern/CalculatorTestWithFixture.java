package com.example.aaapattern;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

// Class under test
class Calculator {
    public int add(int a, int b) { return a + b; }
    public int subtract(int a, int b) { return a - b; }
}

public class CalculatorTestWithFixture {

    private Calculator calculator;

    // Setup method (runs before each test)
    @Before
    public void setUp() {
        calculator = new Calculator(); // Arrange
        System.out.println("Setup complete");
    }

    // Teardown method (runs after each test)
    @After
    public void tearDown() {
        System.out.println("Teardown complete");
        calculator = null; // Clean up
    }

    // Test for addition using AAA pattern
    @Test
    public void testAddition() {
        // Arrange - handled in @Before

        // Act
        int result = calculator.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    // Test for subtraction using AAA pattern
    @Test
    public void testSubtraction() {
        // Arrange - handled in @Before

        // Act
        int result = calculator.subtract(10, 5);

        // Assert
        assertEquals(5, result);
    }
}
