-- Create customers table
CREATE TABLE customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR2(100),
    Age INT,
    Balance NUMBER(10,2),
    IsVIP CHAR(1) DEFAULT 'N'
);

-- Create loans table
CREATE TABLE loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES customers(CustomerID)
);

-- Insert sample customers
INSERT INTO customers VALUES (1, 'Alice', 65, 12000.00, 'N');
INSERT INTO customers VALUES (2, 'Bob', 45, 8000.00, 'N');
INSERT INTO customers VALUES (3, 'Charlie', 70, 5000.00, 'N');

-- Insert sample loans
INSERT INTO loans VALUES (1, 1, 7.5, SYSDATE + 10);
INSERT INTO loans VALUES (2, 2, 6.5, SYSDATE + 35);
INSERT INTO loans VALUES (3, 3, 8.0, SYSDATE + 5);