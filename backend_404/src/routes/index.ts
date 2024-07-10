import { Router } from "express";

/* 
 - delegate
 */

import { CreateClient, ListClients } from "../controllers/client";
import {
  CreateCourse,
  DeleteCourse,
  GetCourse,
  ListCourses,
  UpdateCourse,
} from "../controllers/course";
import { CreateCourseType, ListCourseTypes } from "../controllers/course_type";
import {
  CreateDelegate,
  DeleteDelegate,
  GetDelegate,
  ListDelegates,
  UpdateDelegate,
} from "../controllers/delegate";
import {
  CreateEmployee,
  DeleteEmployee,
  GetEmployee,
  ListEmployees,
  UpdateEmployee,
} from "../controllers/employee";

const router = Router();

router.route("/clients").post(CreateClient).get(ListClients);
router.route("/clients/:id");

router.route("/delegates").post(CreateDelegate).get(ListDelegates);
router
  .route("/delegates/:id")
  .get(GetDelegate)
  .put(UpdateDelegate)
  .delete(DeleteDelegate);

router.route("/employees").post(CreateEmployee).get(ListEmployees);
router
  .route("/employees/:id")
  .get(GetEmployee)
  .put(UpdateEmployee)
  .delete(DeleteEmployee);

router.route("/courses").post(CreateCourse).get(ListCourses);
router
  .route("/courses/:id")
  .get(GetCourse)
  .put(UpdateCourse)
  .delete(DeleteCourse);

router.route("/course-types").post(CreateCourseType).get(ListCourseTypes);
router.route("/course-types/:id");

export default router;
