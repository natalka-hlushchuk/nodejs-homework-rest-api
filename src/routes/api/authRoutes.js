import express from "express";
import {
  loginController,
  registrationController,
  logoutController,
  currentUserController,
  subscriptionController,
} from "../../controllers/authControllers.js";
import { asyncWrapper } from "../../helpers/apiHelpers.js";
import { validTokenMiddleware } from "../../middlewares/validTokenMiddlewares.js";

const authRouter = express.Router();

authRouter.post("/register", asyncWrapper(registrationController));
authRouter.post("/login", asyncWrapper(loginController));

authRouter.post(
  "/logout",
  validTokenMiddleware,
  asyncWrapper(logoutController)
);

authRouter.get(
  "/current",
  validTokenMiddleware,
  asyncWrapper(currentUserController)
);

authRouter.patch(
  "/",
  validTokenMiddleware,
  asyncWrapper(subscriptionController)
);

export { authRouter };
