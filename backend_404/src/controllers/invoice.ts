import { NextFunction, Request, Response } from "express";

export async function CreateInvoice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Invoice created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetInvoice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Invoice read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListInvoices(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Invoices listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateInvoice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Invoice updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteInvoice(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
