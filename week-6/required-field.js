// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

// Defining the RequiredField class
export class RequiredField {
    constructor( name, field){
        this.name = name
        this.field = field
    }

    validate () {
        // Return the boolean value of the this.field property
        return Boolean(this.field)
    }

    getMessage() {
        return `${this.name} is a required field`
    }
}