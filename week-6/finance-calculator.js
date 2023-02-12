// ============================================
// ; Title:  Future Value App
// ; Author: Professor Krasso
// ; Date:   10 February 2023
// ; Modified By: Yakut Ahmedin
// ; Description: Assignment 6 – Future Value App!!
// ;===========================================

// difining a funtion FinanceCalculator
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    // It first calculates the number of months based on the number of years, then calculates the interest rate, present value, and future value. Finally, it returns the future value with a precision of 2 decimal places.
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    //convert a number to currency format
    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return currencyFormatter.format(field);
    }
}