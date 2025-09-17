import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import ContactList from './ContactList';

//array af kontakter til kontaktbogen
const contacts = [
  new Contact(1, 'Caroline', 'Mikkelsen', 'Cao@example.com', '12345678', 'Netflex', 'Manager'),
  new Contact(2, 'Pavla', 'Smith', 'Pav@example.com', '87654321', 'Myhome', 'Designer'),
  new Contact(3, 'Mette', 'Garling', 'MG@example.com', '12345678', 'Gulborgsund kommune', 'Pædagogisk konsulent'),
  new Contact(4, 'Martin', 'Brandt', 'Mar@example.com', '87654321', 'Rudersdahl kommune', 'Konsulent'),
  new Contact(5, 'Ole', 'Hau', 'hau@example.com', '12345678', 'Widex', 'Ingenør'),
  new Contact(6, 'Signe', 'Hau', 'SKB@example.com', '87654321', 'Egedal', 'Pædagog'),
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
        {/* Overskift til kontaktbogen */}
        
          <h1>Contact Book</h1>
          <ContactList contactItems={contacts} />
       



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
