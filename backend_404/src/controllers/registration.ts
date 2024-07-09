import { NextFunction, Request, Response } from "express";

export async function CreateRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Registration created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Registration read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListRegistrations(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Registrations listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Registration updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteRegistration(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Registration deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
