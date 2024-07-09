import { NextFunction, Request, Response } from "express";

export async function CreateLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Location created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Location read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListLocations(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Locations listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Location updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
