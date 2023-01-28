/* ============================================
; Title:  Assignment 4 – Calorie App
; Author: Professor Krasso
; Date:   27 January 2023
; Modified By: Yakut Ahmedin
; Description: Calorie App!!
;=========================================== */
"use-strict";
import { FoodModel} from './food-model.js';

// Create a class named CalorieConverter with a static data and populate it with FoodModel objects
export class CalorieConverter {
    static data = [
      new FoodModel(1007, "Egg", 78),
      new FoodModel(1008, "Apple", 95),
      new FoodModel(1009, "Hamburger", 354),
      new FoodModel(1010, "Fries", 400),
      new FoodModel(1011, "Banana", 105),
      new FoodModel(1012, "Soda", 150)
    ];

    static find(name) {
        return CalorieConverter.data.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }
  }
