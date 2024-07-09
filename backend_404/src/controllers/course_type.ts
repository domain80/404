import { NextFunction, Request, Response } from "express";

export async function CreateCourseType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "CourseType created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetCourseType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "CourseType read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListCourseTypes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseTypes listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateCourseType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseType updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteCourseType(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "CourseType deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
