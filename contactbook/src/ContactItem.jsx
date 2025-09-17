export default function ContactItem(props) {
    return (


        <ul className="bg-green-200 text-black text-left p-6 mb-10 rounded-lg h-52">
            <li> Name: {props.contact.firstName} {props.contact.lastName}</li>
            <li> Email: {props.contact.email}</li>
            <li> Phone: {props.contact.phone}</li>
            <li> Company: {props.contact.company}</li>
            <li> Position: {props.contact.position}</li>

        </ul>

    );
}



