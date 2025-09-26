export default class Clothes {
    constructor (id, brand, model, size, price, color, description, image, isSoldOut = false) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
        this.description = description;
        this.image = image;
        this.isSoldOut = isSoldOut;
    }
}
        