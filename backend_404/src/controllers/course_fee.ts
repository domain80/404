import { NextFunction, Request, Response } from "express";

export async function CreateCourseFee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "CourseFee created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetCourseFee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseFee read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListCourseFees(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseFees listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateCourseFee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseFee updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteCourseFee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseFee deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
