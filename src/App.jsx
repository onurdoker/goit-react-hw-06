import ContactForm from "./components/contactForm/ContactForm.jsx";
import ContactList from "./components/contactList/ContactList.jsx";
import SearchBox from "./components/searchBox/SearchBox.jsx";

import "./App.css";

function App() {
  
  return (
      <div className={"container"}>
        <h1 className={"title"}>Phonebook</h1>
        <div className={"components"}>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </div>
  );
}

export default App;
