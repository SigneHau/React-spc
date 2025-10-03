
import './App.css';
//import Contact from './Contact';
import ContactList from './ContactList';
import { useEffect, useState } from 'react'; // importerer
//import { createClient } from '@supabase/supabase-js'
import AddContact from './AddContact';
//import SignUp from './SignUp';
//import LogIn from './LogIn';
import { SUPABASE_REST_URL, SUPABASE_APIKEY } from './apiConfig';
import Header from "./Header";



//const supabase = createClient(SUPABASE_REST_URL, SUPABASE_APIKEY )

function App() {

    // Sæt startværdien her
    const [contacts, setContacts] = useState([]);
    //En useState-variabel, der holder styr på, om modalen skal vises
    const [isModalOpen, setIsModalOpen] = useState(false);

    //funktion skal gøres asynkron for at kunne kalde createContact
    const handleAddContact = async (newContact) => {
        // 1. Kald Supabase for at gemme den nye kontakt
        const contactFromServer = await createContact(newContact);

        // 2. Opdater state (kontaktlisten i React)
        // Vi bruger spread-operatoren til at tilføje den nye kontakt TIL listen.
        setContacts(current => [contactFromServer, ...current]);

        // 3. Luk modalen
        handleCloseModal();
    };

    // Henter alle Kontacter fra Supabase
    const getContacts = async () => {
        // Basis URL til dit Supabase REST API

        // Kald til fetch for at hente tabellen "Contacts"
        const data = await fetch(SUPABASE_REST_URL + "/Contacts", {
            headers: {
                apikey: SUPABASE_APIKEY,
                Authorization: 'Bearer' + SUPABASE_APIKEY
            }

        }).then(response => response.json()) // Når vi får svar, omdannes det fra JSON
        // Lægger de hentede kontakter ind i din React state
        setContacts(data);
        //udskriver til konsollen - debug
        console.log(data);

    }
    //Hvis du ikke havde [], ville getContact() blive kaldt hver gang komponenten re-renderes, hvilket kan skabe uendelige loops og “reload” hele tiden.
    useEffect(() => {
        getContacts();
    }, [])


    // To simple funktioner til at åbne og lukke modalen.
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Tilføjer contact til supabase
    const createContact = async (contact) => {

        // POST-request til tabellen "Contacts"
        const result = await fetch(SUPABASE_REST_URL + "/Contacts", {
            method: "POST",                                 // Vi bruger POST, fordi vi vil indsætte data
            body: JSON.stringify(contact),                  // pip-objektet konverteres til JSON - så de taler samme sprog
            headers: {
                'Content-Type': "application/json",         // Vi sender JSON
                'apikey': SUPABASE_APIKEY,                           // Supabase kræver API key
                'Authorization': "Bearer" + SUPABASE_APIKEY,
                'prefer': 'return=representation'           // Sørger for at vi får det indsatte objekt retur
            }
        }).then(response => response.json())                // Læser svaret som JSON

        // Debug – ser hvad der blev oprettet
        console.log(result[0]);

        // Returnerer det nyoprettede contant (så du kan lægge det ind i state)
        return result[0];
    }



    return (


        <div className="bg-teal-50 min-h-screen flex flex-col font-serif">

            <Header />

            {/* Main content */}
            <main className="flex flex-col items-center flex-1 p-10">
                <h1 className="text-5xl font-bold text-gray-800">Min Kontaktbog</h1>
                <p className="text-gray-600 text-xl mt-4">
                    Dine vigtige kontakter, samlet ét sted.
                </p>


                <div className="w-full flex justify-center mb-8 mt-8">
                    <button
                        onClick={handleOpenModal}
                        className="bg-rose-400 hover:bg-rose-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Tilføj ny kontakt
                    </button>
                </div>

                <div className="bg-stone-50 rounded-xl shadow-2xl p-6 md:p-12 w-full max-w-4xl relative">
                    <AddContact
                        isOpen={isModalOpen}            // Styres af state: bestemmer om modal er åben eller lukket
                        onClose={handleCloseModal}     // Funktion der kaldes når modal lukkes
                        onAddContact={handleAddContact} // Funktion der kaldes når en ny kontakt tilføjes via modal
                    />
                    {/* <SignUp/> */}
                    {/* <LogIn /> */}
                    <ContactList contactItems={contacts} /> {/* Sender array af kontakter til ContactList komponenten */}
                </div>
            </main>
        </div>
    );
};

export default App;