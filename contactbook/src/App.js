
import './App.css';
import Contact from './Contact';
import ContactList from './ContactList';
import MyModalComponent from './MyModalComponent';
import { useState } from 'react'; // importerer

//array af kontakter til kontaktbogen - dette er startværdien 
const initialContacts = [
  new Contact(1, 'Caroline', 'Elmer', 'Cao@example.com', '12345678', 'Netflex', 'Manager'),
  new Contact(2, 'Pavla', 'Guttesen', 'Pav@example.com', '87654321', 'Myhome', 'Designer'),
  new Contact(3, 'Mette', 'Brandt', 'MG@example.com', '12345678', 'Gulborgsund kommune', 'Pædagogisk konsulent'),
  new Contact(4, 'Martin', 'Garling', 'Mar@example.com', '87654321', 'Rudersdahl kommune', 'Konsulent'),
  new Contact(5, 'Ole', 'Hau', 'hau@example.com', '12345678', 'Widex', 'Ingeniør'),
  new Contact(6, 'Signe', 'Hau', 'SKB@example.com', '87654321', 'Egedal', 'Pædagog'),
];


function App() {

  // Sæt startværdien her
  const [contacts, setContacts] = useState(initialContacts);
  //En useState-variabel, der holder styr på, om modalen skal vises
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContact = (newContact) => { // Flyt denne herind
    setContacts(prevContacts => [newContact,...prevContacts ]);
  };


  // To simple funktioner til at åbne og lukke modalen.
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
        <div className="bg-teal-50 min-h-screen flex flex-col items-center p-10 font-serif">
            <header className="text-center mb-6">
                <h1 className="text-5xl font-bold text-gray-800">Min Kontaktbog</h1>
                <p className="text-gray-600 text-xl mt-4">Dine vigtige kontakter, samlet ét sted.</p>
                
                <div className="w-full flex justify-center mb-8 mt-8">
                    <button
                        onClick={handleOpenModal}
                        className="bg-rose-400 hover:bg-rose-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Tilføj ny kontakt
                    </button>
                </div>
            </header>

            <main className="bg-stone-50 rounded-xl shadow-2xl p-6 md:p-12 w-full max-w-4xl relative">
                <MyModalComponent
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onAddContact={handleAddContact}
                />

                

                <ContactList contactItems={contacts} />
            </main>
        </div>
    );
};

export default App;