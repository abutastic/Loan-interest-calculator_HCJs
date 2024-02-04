function calculateInt(){
   loanAmountValue = document.getElementById("loan-amount").value ;
   
   interestRateValue = document.getElementById("loan-interest").value;

   monthsToPay = document.getElementById("months-amount").value;

    interest = (loanAmountValue * (interestRateValue * 0.01) / monthsToPay)

    monthlyPayment = (loanAmountValue / monthsToPay + interest).toFixed(2);

    document.getElementById("result").innerHTML = `Monthly payment: ${monthlyPayment}`
}