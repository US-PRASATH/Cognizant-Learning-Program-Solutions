-- Create Accounts table (used in Scenario 1 & 3)
CREATE TABLE accounts (
    AccountID INT PRIMARY KEY,
    CustomerID INT,
    Balance NUMBER(10,2),
    AccountType VARCHAR2(20)
);

-- Create Employees table (used in Scenario 2)
CREATE TABLE employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10,2)
);

-- Insert sample data into accounts
INSERT INTO accounts VALUES (101, 1, 10000.00, 'savings');
INSERT INTO accounts VALUES (102, 2, 5000.00, 'current');
INSERT INTO accounts VALUES (103, 3, 7000.00, 'savings');
INSERT INTO accounts VALUES (104, 1, 2000.00, 'savings');

-- Insert sample data into employees
INSERT INTO employees VALUES (1, 'Alice', 'HR', 40000.00);
INSERT INTO employees VALUES (2, 'Bob', 'IT', 50000.00);
INSERT INTO employees VALUES (3, 'Charlie', 'IT', 45000.00);