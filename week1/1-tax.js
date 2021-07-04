/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(prix) {
  tax = prix + ((prix*20)/100);
  return tax;

}
console.log(calculateSalesTax(15));

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00
  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency(prix) {
  tax = prix + ((prix*20)/100);
  return " £ "+ tax + ".00";
}
console.log('"'+'£' + calculateSalesTax(15) +'.00'+'"');
