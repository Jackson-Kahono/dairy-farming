//DOM variables
const table = document.getElementById('table');
const noOfSheds = document.getElementById('no-of-sheds');
const select = document.getElementById('select');
const noOfLitres = document.getElementById('no-of-litres');
const add = document.getElementById('add');
const submit = document.getElementById('submit');

//initialise variables
let sheds = {};

noOfSheds.addEventListener('keyup', function() {
      if (noOfSheds.value > 26) {
            noOfSheds.value = 26;
      }
      setTimeout(() => {
            generateSelect(noOfSheds.value);
            noOfSheds.style.display = 'none';
      }, 6000); 
});

function generateSelect(noOfSheds) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let alphabetArray = alphabet.split('');
      let alphabetArrayLength = alphabetArray.length;
      for (let i = 0; i < noOfSheds; i++) {
            let option = document.createElement('option');
            option.value = alphabetArray[i];
            option.text =`shed  ${alphabetArray[i]}`;
            select.appendChild(option);
      }
}

add.addEventListener('click', function() {
      if (noOfLitres.value && select.value != ""){
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML = `Shed ${select.value}`;
            td2.innerHTML = noOfLitres.value;
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
      } 
});

