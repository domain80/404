-- Insert Delegate Procedure
CREATE OR REPLACE PROCEDURE insert_delegate (
    p_delegateNo IN NUMBER,
    p_delegateTitle IN VARCHAR2,
    p_delegateFName IN VARCHAR2,
    p_delegateLName IN VARCHAR2,
    p_delegateStreet IN VARCHAR2,
    p_delegateCity IN VARCHAR2,
    p_delegateState IN VARCHAR2,
    p_delegateZipCode IN VARCHAR2,
    p_attTelNo IN VARCHAR2,
    p_attFaxNo IN VARCHAR2,
    p_attEmailAddress IN VARCHAR2,
    p_clientNo IN NUMBER
) AS
BEGIN
    INSERT INTO Delegate (
        delegateNo, delegateTitle, delegateFName, delegateLName, delegateStreet, delegateCity,
        delegateState, delegateZipCode, attTelNo, attFaxNo, attEmailAddress, clientNo
    ) VALUES (
        p_delegateNo, p_delegateTitle, p_delegateFName, p_delegateLName, p_delegateStreet, 
        p_delegateCity, p_delegateState, p_delegateZipCode, p_attTelNo, p_attFaxNo, p_attEmailAddress, p_clientNo
    );
EXCEPTION
    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20001, 'Error inserting delegate: ' || SQLERRM);
END insert_delegate;
/
-- Retrieve Delegate Procedure with Cursor
CREATE OR REPLACE PROCEDURE retrieve_delegate (
    p_delegateNo IN NUMBER,
    c_delegate OUT SYS_REFCURSOR
) AS
BEGIN
    OPEN c_delegate FOR
    SELECT * FROM Delegate WHERE delegateNo = p_delegateNo;
EXCEPTION
    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20002, 'Error retrieving delegate: ' || SQLERRM);
END retrieve_delegate;
/
-- Update Delegate Procedure
CREATE OR REPLACE PROCEDURE update_delegate (
    p_delegateNo IN NUMBER,
    p_delegateTitle IN VARCHAR2,
    p_delegateFName IN VARCHAR2,
    p_delegateLName IN VARCHAR2,
    p_delegateStreet IN VARCHAR2,
    p_delegateCity IN VARCHAR2,
    p_delegateState IN VARCHAR2,
    p_delegateZipCode IN VARCHAR2,
    p_attTelNo IN VARCHAR2,
    p_attFaxNo IN VARCHAR2,
    p_attEmailAddress IN VARCHAR2,
    p_clientNo IN NUMBER
) AS
BEGIN
    UPDATE Delegate SET
        delegateTitle = p_delegateTitle,
        delegateFName = p_delegateFName,
        delegateLName = p_delegateLName,
        delegateStreet = p_delegateStreet,
        delegateCity = p_delegateCity,
        delegateState = p_delegateState,
        delegateZipCode = p_delegateZipCode,
        attTelNo = p_attTelNo,
        attFaxNo = p_attFaxNo,
        attEmailAddress = p_attEmailAddress,
        clientNo = p_clientNo
    WHERE delegateNo = p_delegateNo;
EXCEPTION
    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20003, 'Error updating delegate: ' || SQLERRM);
END update_delegate;
/
-- Delete Delegate Procedure
CREATE OR REPLACE PROCEDURE delete_delegate (
    p_delegateNo IN NUMBER
) AS
BEGIN
    DELETE FROM Delegate WHERE delegateNo = p_delegateNo;
EXCEPTION
    WHEN OTHERS THEN
        RAISE_APPLICATION_ERROR(-20004, 'Error deleting delegate: ' || SQLERRM);
END delete_delegate;
/
