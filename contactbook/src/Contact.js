// Denne 'Contact' klasse er en skabelon til at oprette nye kontakt-objekter.
// Hvert objekt vil have egenskaber som fornavn, efternavn, email osv.


export default class Contact {
    constructor(firstName, lastName, email, phone, company, position) {
        //this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.position = position;

    }
}
