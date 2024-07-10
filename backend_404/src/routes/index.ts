import { Router } from "express";

/* 
- course
- employee
- delegate
- client
- courseType (add/fetch)

*/
import {
  CreateBooking,
  DeleteBooking,
  GetBooking,
  ListBookings,
  UpdateBooking,
} from "../controllers/booking";
import {
  CreateClient,
  DeleteClient,
  GetClient,
  ListClients,
  UpdateClient,
} from "../controllers/client";
import {
  CreateCourse,
  DeleteCourse,
  GetCourse,
  ListCourses,
  UpdateCourse,
} from "../controllers/course";
import {
  CreateCourseFee,
  DeleteCourseFee,
  GetCourseFee,
  ListCourseFees,
  UpdateCourseFee,
} from "../controllers/course_fee";
import {
  CreateCourseType,
  DeleteCourseType,
  GetCourseType,
  ListCourseTypes,
  UpdateCourseType,
} from "../controllers/course_type";
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
import {
  CreateLocation,
  DeleteLocation,
  GetLocation,
  ListLocations,
  UpdateLocation,
} from "../controllers/location";
import {
  CreatePaymentMethod,
  DeletePaymentMethod,
  GetPaymentMethod,
  ListPaymentMethods,
  UpdatePaymentMethod,
} from "../controllers/payment_method";
import {
  CreateRegistration,
  DeleteRegistration,
  GetRegistration,
  ListRegistrations,
  UpdateRegistration,
} from "../controllers/registration";
import {
  CreateInvoice,
  DeleteInvoice,
  GetInvoice,
  ListInvoices,
  UpdateInvoice,
} from "../controllers/invoice";

const router = Router();

router.route("/registrations").post(CreateRegistration).get(ListRegistrations);
router
  .route("/registrations/:id")
  .get(GetRegistration)
  .put(UpdateRegistration)
  .delete(DeleteRegistration);

router.route("/bookings").post(CreateBooking).get(ListBookings);
router
  .route("/bookings/:id")
  .get(GetBooking)
  .put(UpdateBooking)
  .delete(DeleteBooking);

router.route("/clients").post(CreateClient).get(ListClients);
router
  .route("/clients/:id")
  .get(GetClient)
  .put(UpdateClient)
  .delete(DeleteClient);

router.route("/delegates").post(CreateDelegate).get(ListDelegates);
router
  .route("/delegates/:id")
  .get(GetDelegate)
  .put(UpdateDelegate)
  .delete(DeleteDelegate);

router.route("/locations").post(CreateLocation).get(ListLocations);
router
  .route("/locations/:id")
  .get(GetLocation)
  .put(UpdateLocation)
  .delete(DeleteLocation);

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
router
  .route("/course-types/:id")
  .get(GetCourseType)
  .put(UpdateCourseType)
  .delete(DeleteCourseType);

router.route("/course-fees").post(CreateCourseFee).get(ListCourseFees);
router
  .route("/course-fees/:id")
  .get(GetCourseFee)
  .put(UpdateCourseFee)
  .delete(DeleteCourseFee);

router
  .route("/payment-methods")
  .post(CreatePaymentMethod)
  .get(ListPaymentMethods);
router
  .route("/payment-methods/:id")
  .get(GetPaymentMethod)
  .put(UpdatePaymentMethod)
  .delete(DeletePaymentMethod);

router.route("/invoices").post(CreateInvoice).get(ListInvoices);
router
  .route("/invoices/:id")
  .get(GetInvoice)
  .put(UpdateInvoice)
  .delete(DeleteInvoice);

export default router;
