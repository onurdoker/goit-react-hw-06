import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contacts from "../contact/Contacts.jsx";

import styles from "./ContactList.module.css";

const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  
  
  let filteredContacts;
  
  if (filter) {
    filteredContacts = contacts.filter((person) => person.name.toLowerCase()
                                                         .startsWith(filter));
  } else {
    filteredContacts = contacts.sort((a,
                                      b) => a.name.localeCompare(b.name));
  }
  
  return (
      <ul className={styles.list}>
        {filteredContacts.length === 0
            ? (<p>There are no available contacts!</p>)
            : (filteredContacts.map((person) => <Contacts
                key={person.id}
                contact={person}
            />))}
      </ul>
  );
  
};

export default ContactList;