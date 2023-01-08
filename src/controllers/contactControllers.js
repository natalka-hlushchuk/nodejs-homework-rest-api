import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} from "../models/contacts.js";

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts, status: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const getContactByIdNew = async (req, res, next) => {
  try {
    const contact = await getContactById(req.params.contactId);
    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found", status: "not found" });
    }
    res.status(200).json({ contact, status: "success" });
  } catch (err) {
    console.log(err);
  }
};
export const addNewContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  try {
    const contact = await addContact(name, email, phone);
    res.status(201).json({ contact, status: "success" });
  } catch (err) {
    console.log(err);
  }
};
export const deleteContact = async (req, res, next) => {
  try {
    const response = await removeContact(req.params.contactId);
    if (!response) {
      return res
        .status(404)
        .json({ message: "Contact not found", status: "not found" });
    }
    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
  }
};
export const changeContacts = async (req, res) => {
  const contact = await updateContact(req.params.contactId, req.body);
  if (!contact) {
    return res
      .status(404)
      .json({ message: "Contact not found", status: "not found" });
  }
  res.status(200).json({ contact, status: "success" });
};
