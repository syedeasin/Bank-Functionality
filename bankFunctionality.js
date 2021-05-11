var loginButton = document.getElementById('login');
loginButton.addEventListener('click', function()
{
    const loginArea = document.getElementsByClassName('login')[0];
    loginArea.style.display = 'none';
    const transactionArea = document.getElementsByClassName('transaction-area')[0];
    transactionArea.style.display = 'block';
})