import { NextFunction, Request, Response } from "express";

export async function CreateCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function GetCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(201).json({ message: "Course read successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function ListCourses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Courses listed successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function UpdateCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Course updated successfully" });
  } catch (error) {
    return next(error);
  }
}

export async function DeleteCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
