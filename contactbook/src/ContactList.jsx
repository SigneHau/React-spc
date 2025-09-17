
import ContactItem from "./ContactItem";

export default function ContactList(props) {
   return (
    <div>
      
      <h4>My contacts</h4>
      {props.contactItems.map((contact) => (
        <ContactItem 
          key={contact.id.toString()} 
          contact={contact}  // hele objektet sendes som prop
        />
      ))}
    </div>
  );
}