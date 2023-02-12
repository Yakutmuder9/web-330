// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

//defining a funtion  FloatMaxField
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        // convert the field value to a floating-point number
        let fieldValue = parseFloat(this.field);
        return ((fieldValue < this.max) ? true : false);
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}
