import { NextFunction, Request, Response } from "express";

export async function CreateDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Delegate created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Delegate read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListDelegates(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Delegates listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Delegate updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteDelegate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Delegate deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
