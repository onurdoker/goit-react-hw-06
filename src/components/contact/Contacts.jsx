import { useDispatch } from "react-redux";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice.js";

import styles from "./Contacts.module.css";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  
  return (
      <li className={styles.contactItem}>
        <IoPersonSharp className={styles.icon} />
        <div className={styles.contactInfo}>
          <p className={styles.contactName}>{contact.name}</p>
          <div className={styles.contactDetail}>
            <FaPhone className={styles.phoneIcon} />
            <p className={styles.contactName}>{contact.number}</p>
          </div>
        </div>
        <button
            className={styles.btn}
            onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </li>
  );
};

export default Contacts;