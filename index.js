// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

document.querySelector('#calculate').onclick = calculateTip;

function calculateTip() {
  let amount = document.querySelector('#amount').value;
  let persons = document.querySelector('#persons').value;
  let service = document.querySelector('#services').value;

  console.log(service);

  if (amount === '' && service === 'Select') {
    alert('Please enter valid values');
    return;
  }

  persons === '1'
    ? (document.querySelector('#each').style.display = 'none')
    : (document.querySelector('#each').style.display = 'block');

  let total = (amount * service) / persons;
  total = total.toFixed(2);

  document.querySelector('.tip').style.display = 'block';
  document.querySelector('#total').innerHTML = total + '₹';

  console.log(total);
}

console.log('hello');
