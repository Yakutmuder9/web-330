/* ============================================
; Title:  Assignment 5 – Bob’s Automotive Repair Shop App
; Author: Professor Krasso
; Date:   05 February 2023
; Modified By: Yakut Ahmedin
; Description: Bob’s Automotive Repair Shop App!!
=========================================== */

export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product);
  }

  *generator() {
    for (let product of this.products) {
      yield product;
    }
  }
}

