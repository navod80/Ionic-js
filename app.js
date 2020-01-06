const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#total-expenses');

let totalExpensesOutput = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0){
        return console.log('nothing to return');
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expenseList.appendChild(newItem);

    const num = Number(enteredAmount)
    totalExpensesOutput += num;
    totalExpenses.textContent = totalExpensesOutput.toFixed(2);
    clear();
})

cancelBtn.addEventListener('click', clear);