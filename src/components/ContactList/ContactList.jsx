import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
