// Constants for spending threshold, tax rate, phone and accessory prices
const spending_threshold = 200;
const tax_rate = 0.08;
const phone_price = 99.99;
const accessory_price = 9.99;

// Initial bank balance and amount variables
var bank_balance = 303.91;
var amount = 0;

// Function to calculate tax based on an amount
function calculateTax(amount) {
  return amount * tax_rate;
}

// Function to format an amount as a currency
function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// Loop to keep adding phone prices and, if below threshold, accessory prices
while (amount < bank_balance) {
  amount = amount + phone_price;
  if (amount < spending_threshold) {
    amount = amount + accessory_price;
  }
}

// Adding tax to the total amount
amount = amount + calculateTax(amount);

// Displaying the purchase amount in a formatted way
console.log("Your purchase: " + formatAmount(amount));

// Check if the amount exceeds the bank balance and print a message
if (amount > bank_balance) {
  console.log("You can't afford this purchase :(");
}
