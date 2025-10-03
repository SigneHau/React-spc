// Denne komponent viser et enkelt kontaktkort og modtager et 'contact'-objekt via props.

export default function ContactItem({contact}) {
    return (


        <div className="bg-rose-200 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl  font-bold text-gray-800">{contact.firstName} { contact.lastName}</h3>

            <p className="text-gray-600">Email: {contact.email}</p>
            <p className="text-gray-600">Phone: {contact.phone}</p>
            <p className="text-gray-600"> Company: {contact.company}</p>
            <p className="text-gray-600"> Position: {contact.position}</p>

        </div>

    );
}



