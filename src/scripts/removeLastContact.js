import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const updatedContacts = await readContacts();
  updatedContacts.pop();
  return await writeContacts(updatedContacts);
};

removeLastContact();
