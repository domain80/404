import { NextFunction, Request, Response } from "express";

export async function CreateEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Employee created successfully" });
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
    return res.status(201).json({ message: "Employee read successfully" });
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
    return res.status(200).json({ message: "Employees listed successfully" });
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
    return res.status(200).json({ message: "Employee updated successfully" });
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
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
