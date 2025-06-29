-- Scenario 1
BEGIN
    FOR r IN (
        SELECT l.LoanID
        FROM loans l
        JOIN customers c ON l.CustomerID = c.CustomerID
        WHERE c.Age > 60
    )
    LOOP
        UPDATE loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = r.LoanID;
    END LOOP;
END;
/

SELECT * FROM loans;

-- Scenario 2
BEGIN
    UPDATE customers
    SET IsVIP = 'Y'
    WHERE Balance > 10000;
END;
/

SELECT * FROM customers;

-- Scenario 3
SET SERVEROUTPUT ON;

BEGIN
    FOR r IN (
        SELECT c.Name, l.DueDate
        FROM loans l
        JOIN customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || r.Name || ', your loan is due on ' || TO_CHAR(r.DueDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/

