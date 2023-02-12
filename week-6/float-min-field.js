// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

//Define FloatMinField
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        // convert the field value to a floating-point number
        let fieldValue = parseFloat(this.field);
        return ((fieldValue > this.min) ? true : false);
    }

    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}