import { NextFunction, Request, Response } from "express";
import { database } from "../models/connection";

export async function CreateEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const employeeName: string = req.body.employeeName;
    if (!employeeName) {
      return res.status(200).json({
        success: false,
        message: "Employee name required",
      });
    }

    const connection = await database.connect();

    const query = `INSERT INTO Employee (employeeName) VALUES (:employeeName)`;
    await connection.execute(query, [employeeName]);

    await connection.close();

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function ListEmployees(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const connection = await database.connect();

    const query = `SELECT employeeNo, employeeName FROM Employee`;
    const result = await connection.execute(query);

    await connection.close();

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return next(error);
  }
}

export async function GetEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(200).json({
        success: false,
        message: "Invalid employee ID",
      });
    }

    const connection = await database.connect();

    const query = `SELECT employeeNo, employeeName FROM Employee WHERE employeeNo = :id`;
    const result = await connection.execute(query, [id]);
    if (result.rows.length === 0) {
      return res.status(200).json({
        success: false,
        message: `Employee by id, ${id}, not found`,
      });
    }

    await connection.close();

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(200).json({
        success: false,
        message: "Invalid employee ID",
      });
    }

    const employeeName: string = req.body.employeeName;
    if (!employeeName) {
      return res.status(200).json({
        success: false,
        message: "Employee name required",
      });
    }

    const connection = await database.connect();

    const query = `UPDATE Employee SET employeeName = ? WHERE employeeNo = :id`;
    await connection.execute(query, [employeeName, id]);

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
    });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(200).json({
        success: false,
        message: "Invalid employee ID",
      });
    }

    const connection = await database.connect();

    const query = `DELETE FROM Employee WHERE employeeNo = :id`;
    await connection.execute(query, [id]);

    await connection.close();

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
}
