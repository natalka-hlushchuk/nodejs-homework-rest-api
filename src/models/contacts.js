import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
const contactsPath = path.resolve("./src/models/contacts.json");

export async function listContacts() {
  try {
    const list = await fs.readFile(contactsPath, "utf8");
    const listParsed = JSON.parse(list);
    return listParsed;
  } catch (err) {
    console.log(err);
  }
}
export async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find(
      (contact) => contact.id === String(contactId)
    );
    if (!contactById) {
      return "contact by id not found";
    }
    return contactById;
  } catch (err) {
    console.log(err);
  }
}
export async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(
      (contact) => contact.id === String(contactId)
    );
    contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return true;
  } catch (err) {
    console.log(err);
  }
}
export async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
    return newContact;
  } catch (err) {
    console.log(err);
  }
}

export async function updateContact(contactId, body) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(
      (contact) => contact.id === String(contactId)
    );

    if (index < 0) {
      return;
    } else {
      contacts[index] = { ...contacts[index], ...body };
    }

    await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
    return contacts[index];
  } catch (error) {
    console.log(err);
  }
}
