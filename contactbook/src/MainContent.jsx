
import './App.css';
import { ContactContext } from './ContactContext';
//import Contact from './Contact';
import ContactList from './ContactList';
import { useContext, useEffect, useState } from 'react'; // importerer
import AddContact from './AddContact';
//import SignUp from './SignUp';
//import LogIn from './LogIn';
//import { SUPABASE_REST_URL, SUPABASE_APIKEY } from './apiConfig';
import Header from "./Header";




//const supabase = createClient(SUPABASE_REST_URL, SUPABASE_APIKEY )

export default function MainContent() {

    //En useState-variabel, der holder styr på, om modalen skal vises
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {getContacts, addContact} =useContext(ContactContext);
  
    //forhindre “reload” hele tiden.
    useEffect(() => {
        getContacts();
    }, [])

    // To simple funktioner til at åbne og lukke modalen.
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

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
                        onAddContact={addContact} // Funktion der kaldes når en ny kontakt tilføjes via modal
                    />
                    {/* <SignUp/> */}
                    {/* <LogIn /> */}
                    <ContactList /> {/* Sender array af kontakter til ContactList komponenten */}
                </div>
            </main>
        </div>
    );
};

