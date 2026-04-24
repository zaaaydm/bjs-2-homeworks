"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr; 
  }
  else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 100 / 12;
  let creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;
  
  return Number(totalPayment.toFixed(2));
}