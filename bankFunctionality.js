var loginButton = document.getElementById('login');
loginButton.addEventListener('click', function()
{
    const loginArea = document.getElementsByClassName('login')[0];
    loginArea.style.display = 'none';
    const transactionArea = document.getElementsByClassName('transaction-area')[0];
    transactionArea.style.display = 'block';
})

// Deposite Button Start 
const depositeBtn = document.getElementById('depositeButton');
depositeBtn.addEventListener('click',function()
{
    var depositeAmmount = document.getElementById('depositeAmmount').value;
    depositeUpdate(depositeAmmount);
    balanceUpdateForDeposite(depositeAmmount);
});

function depositeUpdate(num)
{

    var depositeValue = document.getElementById('depositBalance').innerHTML;
    depositeValue = parseFloat(depositeValue) + parseFloat(num); // Adding New Deposite Value with Previous Value
    document.getElementById('depositBalance').innerHTML = depositeValue;
}
// Deposite Button End 

// Withdraw Button Start 
const withdrawButton = document.getElementById('withdrawButton');
withdrawButton.addEventListener('click',function()
{
    var withdrawAmount = document.getElementById('withdrawAmount').value;
    withdrawUpdate(withdrawAmount);
    balanceUpdateForWithdraw(withdrawAmount);
})
function withdrawUpdate(num) {
    var withdrawBalance = document.getElementById('withdrawBalance').innerHTML;
    withdrawBalance = parseFloat(withdrawBalance) + parseFloat(num);
    document.getElementById('withdrawBalance').innerHTML = withdrawBalance;
}
// Withdraw Button End 
// Balance Update Start
function balanceUpdateForDeposite(num)
{

    var totalBalance = document.getElementById('totalBalance').innerHTML;
    totalBalance = parseFloat(totalBalance) + parseFloat(num); // Adding New Deposite Value with Previous Value
    document.getElementById('totalBalance').innerHTML = totalBalance;
}
function balanceUpdateForWithdraw(num)
{

    var totalBalance = document.getElementById('totalBalance').innerHTML;
    totalBalance = parseFloat(totalBalance) - parseFloat(num); // Adding New Deposite Value with Previous Value
    document.getElementById('totalBalance').innerHTML = totalBalance;
}
// Balance Update End 