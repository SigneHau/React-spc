// Denne komponent viser et enkelt kontaktkort og modtager et 'contact'-objekt via props.

export default function ContactItem(props) {
    return (


        <div className="bg-rose-200 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl  font-bold text-gray-800">{props.contact.firstName} {props.contact.lastName}</h3>

            <p className="text-gray-600">Email: {props.contact.email}</p>
            <p className="text-gray-600">Phone: {props.contact.phone}</p>
            <p className="text-gray-600"> Company: {props.contact.company}</p>
            <p className="text-gray-600"> Position: {props.contact.position}</p>

        </div>

    );
}



