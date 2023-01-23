/* ============================================
; Title:  Assignment 3 – Restaurant App
; Author: Professor Krasso
; Date:   22 January 2023
; Modified By: Yakut Ahmedin
; Description: Restaurant App!!
;=========================================== */
"use-strict";
// Create a class named Bill 
export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    // Create a function with one parameter of type beverage
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    // Create a function with one parameter of type appetizer
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    // Create a function with one parameter of type mainCourse
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    // Create a function with one parameter of type dessert
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    // Create a function with one parameter of type total
    getTotal() {
        let total = 0;

        let beverageTotal = this._beverages.forEach(function (beverage) {
            total += parseFloat(beverage.price);
        });

        let appetizerTotal = this._appetizers.forEach(function (appetizer) {
            total += parseFloat(appetizer.price);
        });

        let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) {
            total += parseFloat(mainCourse.price);
        });

        let dessertTotal = this._desserts.forEach(function (dessert) {
            total += parseFloat(dessert.price);
        });

        return total.toFixed(2);
    }
}
