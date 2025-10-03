import { Children, createContext, useState } from "react";

import Contact from "./Contact";

import { SUPABASE_REST_URL, SUPABASE_APIKEY } from "./apiConfig";
import AddContact from "./AddContact";

// create Context
export const ContactContext = createContext();

// Tilføjer contact til supabase
const createContact = async (contact) => {

    // POST-request til tabellen "Contacts"
    const result = await fetch(SUPABASE_REST_URL + "/Contacts", {
        method: "POST",                                 // Vi bruger POST, fordi vi vil indsætte data
        body: JSON.stringify(contact),                  // contact-objektet konverteres til JSON - så de taler samme sprog
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


//create provider Compenent
export const ContactProvider = ({ children }) => {
    // Sæt startværdien her
    const [contacts, setContacts] = useState([]);

    // Henter alle Kontacter fra Supabase
    const getContacts = async () => {
        // Basis URL til dit Supabase REST APIF
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

  // Add new contact
  async function addContact(newContact) {
    const contactFromServer = await createContact(newContact);
    setContacts((current) => [contactFromServer, ...current]);
  }

  return (
    <ContactContext.Provider value={{ contacts, getContacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};


