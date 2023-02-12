// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

// Import statements for RequiredField, FloatField, FloatMinField, and FloatMaxField classes
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    // Class properties: validators and messages
    validators = [];
    messages = [];

    // Class constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // add a new instance of the RequiredField class to the validators array
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    // add a new instance of the FloatField class to the validators array
    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    // add a new instance of the FloatMinField class to the validators array
    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    // Function to add a new instance of the FloatMaxField class to the validators array
    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // validate all the validators in the validators array
    validate() {
        // iterate over the validators array
        for (const validator of this.validators) {
            // Call the validate function 
            if (!validator.validate()) {
                // If false, add the getMessage function to the messages array
                this.messages.push(validator.getMessage());
                return false;
            }
        }

        return true;
    }
}


