-- Create the Client table
CREATE TABLE Client (
    clientNo NUMBER PRIMARY KEY,
    clientName VARCHAR2(100)
);

-- Create the Employee table
CREATE TABLE Employee (
    employeeNo NUMBER PRIMARY KEY,
    employeeName VARCHAR2(100)
);

-- Create the Location table
CREATE TABLE Location (
    locationNo NUMBER PRIMARY KEY,
    locationName VARCHAR2(100),
    maxSize NUMBER
);

-- Create the CourseType table
CREATE TABLE CourseType (
    courseTypeNo NUMBER PRIMARY KEY,
    courseTypeDescription VARCHAR2(100)
);

-- Create the Course table
CREATE TABLE Course (
    courseNo NUMBER PRIMARY KEY,
    courseName VARCHAR2(100),
    courseDescription VARCHAR2(255),
    startDate DATE,
    startTime TIMESTAMP,
    endDate DATE,
    endTime TIMESTAMP,
    maxDelegates NUMBER,
    confirmed CHAR(1),
    delivererEmployeeNo NUMBER,
    courseTypeNo NUMBER,
    FOREIGN KEY (delivererEmployeeNo) REFERENCES Employee(employeeNo),
    FOREIGN KEY (courseTypeNo) REFERENCES CourseType(courseTypeNo)
);

-- Create the CourseFee table
CREATE TABLE CourseFee (
    courseFeeNo NUMBER PRIMARY KEY,
    feeDescription VARCHAR2(100),
    fee NUMBER,
    courseNo NUMBER,
    FOREIGN KEY (courseNo) REFERENCES Course(courseNo)
);

-- Create the Delegate table
CREATE TABLE Delegate (
    delegateNo NUMBER PRIMARY KEY,
    delegateTitle VARCHAR2(10),
    delegateFName VARCHAR2(50),
    delegateLName VARCHAR2(50),
    delegateStreet VARCHAR2(100),
    delegateCity VARCHAR2(50),
    delegateState VARCHAR2(50),
    delegateZipCode VARCHAR2(10),
    attTelNo VARCHAR2(15),
    attFaxNo VARCHAR2(15),
    attEmailAddress VARCHAR2(100),
    clientNo NUMBER,
    FOREIGN KEY (clientNo) REFERENCES Client(clientNo)
);

-- Create the PaymentMethod table
CREATE TABLE PaymentMethod (
    pMethodNo NUMBER PRIMARY KEY,
    methodDescription VARCHAR2(100)
);

-- Create the Registration table
CREATE TABLE Registration (
    registrationNo NUMBER PRIMARY KEY,
    registrationDate DATE,
    delegateNo NUMBER,
    courseFeeNo NUMBER,
    registerEmployeeNo NUMBER,
    courseNo NUMBER,
    FOREIGN KEY (delegateNo) REFERENCES Delegate(delegateNo),
    FOREIGN KEY (courseFeeNo) REFERENCES CourseFee(courseFeeNo),
    FOREIGN KEY (registerEmployeeNo) REFERENCES Employee(employeeNo),
    FOREIGN KEY (courseNo) REFERENCES Course(courseNo)
);

-- Create the Invoice table
CREATE TABLE Invoice (
    invoiceNo NUMBER PRIMARY KEY,
    dateRaised DATE,
    datePaid DATE,
    creditCardNo VARCHAR2(16),
    holdersName VARCHAR2(100),
    expiryDate DATE,
    registrationNo NUMBER,
    pMethodNo NUMBER,
    FOREIGN KEY (registrationNo) REFERENCES Registration(registrationNo),
    FOREIGN KEY (pMethodNo) REFERENCES PaymentMethod(pMethodNo)
);

-- Create the Booking table
CREATE TABLE Booking (
    bookingNo NUMBER PRIMARY KEY,
    bookingDate DATE,
    locationNo NUMBER,
    courseNo NUMBER,
    bookingEmployeeNo NUMBER,
    FOREIGN KEY (locationNo) REFERENCES Location(locationNo),
    FOREIGN KEY (courseNo) REFERENCES Course(courseNo),
    FOREIGN KEY (bookingEmployeeNo) REFERENCES Employee(employeeNo)
);