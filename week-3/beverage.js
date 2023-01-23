/* ============================================
; Title:  Assignment 3 – Restaurant App
; Author: Professor Krasso
; Date:   22 January 2023
; Modified By: Yakut Ahmedin
; Description: Restaurant App!!
;=========================================== */
"use-strict";
import { Product } from './product.js';

// Create a JavaScript class named Beverage.
export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}