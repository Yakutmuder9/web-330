/* ============================================
; Title:  Assignment 5 – Bob’s Automotive Repair Shop App
; Author: Professor Krasso
; Date:   05 February 2023
; Modified By: Yakut Ahmedin
; Description: Bob’s Automotive Repair Shop App!!
=========================================== */

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
