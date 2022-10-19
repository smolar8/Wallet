const incomeSection = document.querySelector(".income-area");
const availableMoney = document.querySelector(".income-area");
const addTransactionPanel = document.querySelector(".add-transaction-panel");
const expensesSection = document.querySelector(".expenses-area");

const nameInput = document.querySelectorAll("#name");
const amountInput = document.querySelectorAll("#amount");
const categorySelect = document.querySelectorAll("#category");

const addTransactionBtn = document.querySelector(".add-transaction");
const deleteAllBtn = document.querySelector(".delete-all");
const deleteBtn = document.querySelector(".delete");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];
