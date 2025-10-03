
import { useContext } from "react";
import ContactItem from "./ContactItem";
import { ContactContext } from "./ContactContext";

// Denne komponent er ansvarlig for at vise en liste af kontakter.
// Den modtager kontakt-data som et array i 'props'.

export default function ContactList() {
    const { contacts } = useContext(ContactContext)
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 ">Kontakter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                {contacts.length === 0 && <h2>Ingen kontakter endnu... vent...</h2>}

                {contacts.map((contact) => (
                    <ContactItem 
                        key={contact?.id?.toString()} 
                        contact={contact} 
                    />
                ))}
            </div>
        </div>
    );
}