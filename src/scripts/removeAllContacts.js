import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const Contacts = await readContacts();
  Contacts.length = 0;
  return await writeContacts(Contacts);
};

removeAllContacts();
