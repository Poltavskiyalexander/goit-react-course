import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import style from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      // {
      //   id: '6938676d-ae1b-4103-8945-2aaabeb860c7',
      //   name: 'Rosie Simpson',
      //   number: '459-12-56',
      // },
      // {
      //   id: '2266ef36-0fe5-4738-b871-a8b9bc20dee2',
      //   name: 'Hermione Kline',
      //   number: '443-89-12',
      // },
      // {
      //   id: 'aed84b61-e30b-47ee-93e9-3a15f0ad60e4',
      //   name: 'Eden Clements',
      //   number: '645-17-79',
      // },
      // {
      //   id: '42082e5d-fb53-4bcd-b37f-baf857e98944',
      //   name: 'Annie Copeland',
      //   number: '227-91-26',
      // },
    ],
    filter: '',
  });

  useEffect(() => {
    if (localStorage.getItem(lsKey)) {
      setState({ ...state, contacts: JSON.parse(localStorage.getItem(lsKey)) });
    }
  }, []);

  const lsKey = 'contacts';

  const changeFilterHandler = event => {
    const { value } = event.target;
    setState({
      ...state,
      filter: value,
    });
  };

  const submitHandler = (event, data) => {
    event.preventDefault();
    if (
      state.contacts.find(contact => contact.name === data.name) === undefined
    ) {
      // console.log(data);
      // const newContacts = [...state.contacts];
      // newContacts.push({ id: 'id-5', ...data });
      // console.log(newContacts);
      const newContacts = [...state.contacts, { id: uuidv4(), ...data }];
      setState({
        ...state,
        contacts: newContacts,
      });
      localStorage.setItem(lsKey, JSON.stringify(newContacts));
    } else {
      alert(`${data.name} is already in contacts.`);
    }
  };
  const deleteContact = id => {
    const { contacts } = state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    setState({
      ...state,
      contacts: newContacts,
    });
    localStorage.setItem(lsKey, JSON.stringify(newContacts));
  };
  const contactFilter = () => {
    const { contacts, filter } = state;
    if (filter === '') {
      return contacts;
    }
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase),
    );
  };

  return (
    <div className={style.wraper}>
      <div className={style.container}>
        <div className={style.dev}>
          <h1>Phonebook</h1>
          <ContactForm submitHandler={submitHandler} />
          <h2>Contacts</h2>
          <Filter
            changeFilterHandler={changeFilterHandler}
            filter={state.filter}
          />
          <ContactList
            contacts={contactFilter()}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
