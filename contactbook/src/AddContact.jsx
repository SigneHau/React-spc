import React, { useState } from 'react';
import Contact from './Contact';

//  tilføje ny kontakt
const AddContact = ({ isOpen, onClose, onAddContact }) => {
    // State til alle inputfelter
    //const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [company, setCompany] = useState('');
    // const [position, setPosition] = useState('');

    const [formValues, setFormValues] = useState(
        new Contact("", "", "", "", "", "")
    )

    // Håndterer form submission
    const handleSubmit = (e) => {
       e.preventDefault(); // Forhindrer reload

console.log(formValues);

        //     // Opretter nyt kontaktobjekt
        //     const newContact = {
        //         firstName,
        //         lastName,
        //         email,
        //         phone,
        //         company,
        //         position,
        //     };

        onAddContact(formValues); // ny kontact med den nye statevariabel som et object

        //     // Nulstiller inputfelterne efter submit
        //     setFirstName('');
        //     setLastName('');
        //     setEmail('');
        //     setPhone('');
        //     setCompany('');
        //     setPosition('');

        //     onClose(); // Lukker modal efter tilføjelse
    };

    // Generisk funktion til at opdatere state objektet
    // virker kun hvis input har en name="attributs navn" (fra Todo objektet)
    function handleInputChange(e) {
        console.log(e.target.value);
        console.log(e.target.name);

        setFormValues((prev) => {
            const updated = {
                ...prev,
                [e.target.name]: e.target.value,
            };
            // console.log("Updated form values:", updated);
            return updated;
        })
    }


    // Hvis modal ikke skal vises, returneres ingenting
    if (!isOpen) return null;

    return (
        <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4 z-50">
            <div className="modal-container relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">

                {/* Knap til at lukke modal */}
                <button
                    className="modal-close-btn absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
                    onClick={onClose}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal overskrift */}
                <h3 className="modal-title text-xl font-bold mb-4 text-center">Tilføj ny kontakt</h3>

                {/* Formular til at indtaste kontaktoplysninger */}
                <form onSubmit={handleSubmit} className="modal-form space-y-4">

                    {/* Fornavn */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="firstName" className="form-label text-sm text-gray-700 font-semibold mb-1">Fornavn:</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formValues.FirstName}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Efternavn */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="lastName" className="form-label text-sm text-gray-700 font-semibold mb-1">Efternavn:</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="email" className="form-label text-sm text-gray-700 font-semibold mb-1">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Telefon */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="phone" className="form-label text-sm text-gray-700 font-semibold mb-1">Telefon:</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Firma */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="company" className="form-label text-sm text-gray-700 font-semibold mb-1">Firma:</label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            value={formValues.company}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Stilling */}
                    <div className="form-group flex flex-col">
                        <label htmlFor="position" className="form-label text-sm text-gray-700 font-semibold mb-1">Stilling:</label>
                        <input
                            id="position"
                            name='position'
                            type="text"
                            value={formValues.position}
                            onChange={handleInputChange}
                            className="form-input p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Knap til at submitte ny kontakt */}
                    <button
                        type="submit"
                        className="modal-submit-btn w-full bg-rose-400 hover:bg-rose-900 text-white font-bold py-2 rounded-md transition-colors"
                    >
                        Tilføj kontakt
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
