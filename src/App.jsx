import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import css from "./App.module.css";

import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.component}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
