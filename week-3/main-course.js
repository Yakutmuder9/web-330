/* ============================================
; Title:  Assignment 3 – Restaurant App
; Author: Professor Krasso
; Date:   22 January 2023
; Modified By: Yakut Ahmedin
; Description: Restaurant App!!
;=========================================== */
"use-strict";
import { Product } from "./product.js";

// Create a class named MainCourse and inherit the Product object.
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price)
    }
}