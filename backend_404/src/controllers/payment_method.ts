import { NextFunction, Request, Response } from "express";

export async function CreatePaymentMethod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "PaymentMethod created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetPaymentMethod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "PaymentMethod read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListPaymentMethods(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "PaymentMethods listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdatePaymentMethod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "PaymentMethod updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeletePaymentMethod(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "PaymentMethod deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
