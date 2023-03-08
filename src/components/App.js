import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const [contacts, setContact] = React.useState([]);
  //whenever contact chnages execute this function

  //when page loads gets contacts from loacl storage
  React.useEffect(() => {
    const cont = JSON.parse(localStorage.getItem("contacts"));
    console.log(typeof cont);

    if (cont.length > 0) {
      console.log("cont=>", cont);
      setContact(cont);
    }
  }, []);

  // adds to loacl storaGe when the state changes
  React.useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  async function addContactHandler(contacts) {
    setContact((prev) => {
      return [...prev, contacts];
    });
  }
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route
          // render ={props=>(<AddContact {..props}  />)}
            exact
            path="/addContacts"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            exact
            path="/contactList"
            element={<ContactList contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
