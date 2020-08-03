import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import Filter from './components/Filter';
import phonebookOperations from './redux/phonebook/phonebook-operations';
import phonebookSelectors from './redux/phonebook/phonebook-selectors';
import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length >= 2 && <Filter />}
        {contacts.length > 0 && <ContactList />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
