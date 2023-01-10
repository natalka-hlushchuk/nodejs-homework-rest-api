import express from "express";
import {
  addNewContact,
  changeContacts,
  deleteContact,
  getContactByIdNew,
  getContacts,
} from "../../controllers/contactControllers.js";
import {
  addContactValidation,
  changeContactValidation,
} from "../../middlewares/validationMiddlewares.js";

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getContactByIdNew);

router.post("/", addContactValidation, addNewContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", changeContactValidation, changeContacts);

export { router };
