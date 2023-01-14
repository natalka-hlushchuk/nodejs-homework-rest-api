import express from "express";
import {
  addNewContactController,
  changeContactsController,
  deleteContactController,
  getContactByIdNewController,
  getContactsController,
  addFavoriteContactController,
} from "../../controllers/contactControllers.js";
import { contactValidation } from "../../middlewares/validationMiddlewares.js";
import { asyncWrapper } from "../../helpers/apiHelpers.js";

const router = express.Router();

router.get("/", asyncWrapper(getContactsController));

router.get("/:contactId", asyncWrapper(getContactByIdNewController));

router.post("/", contactValidation, asyncWrapper(addNewContactController));

router.delete("/:contactId", asyncWrapper(deleteContactController));

router.put(
  "/:contactId",
  contactValidation,
  asyncWrapper(changeContactsController)
);

router.patch(
  "/:contactId/favorite",
  asyncWrapper(addFavoriteContactController)
);
export { router };
