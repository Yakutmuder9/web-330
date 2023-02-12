// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

// defining a funtion FloatField
export class FloatField {
    constructor(name, field) {
        this.name = name
        this.field = field
    }

    validate() {
        // Return true if the field can be parsed as a float, false otherwise.
        return !isNaN(parseFloat(this.field));
    }

    getMessage() {
        // Return the error message.
        return `${this.name} must be a float value. You entered ${this.field}`;

    }
}