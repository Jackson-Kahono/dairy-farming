//DOM variables
const table = document.getElementById('table');
const noOfSheds = document.getElementById('no-of-sheds');
const select = document.getElementById('select');
const noOfLitres = document.getElementById('no-of-litres');
const add = document.getElementById('add');
const submit = document.getElementById('submit');
const p = document.getElementById('p');
const displayBody = document.querySelector(".display");
const disp = document.querySelector(".disp");
const formBtn = document.querySelector(".form-btn");


table.style.display = "none";

//initialise variables
let sheds = {};
const price = 45;
const months = {
      'JANUARY': 31,
      'FEBRUARY': 29,
      'MARCH': 31,
      'APRIL': 30,
      'MAY': 31,
      'JUNE': 30,
      'JULY': 31,
      'AUGUST': 31,
      'SEPTEMBER': 30,
      'OCTOBER': 31,
      'NOVEMBER': 30,
      'DECEMBER': 31
}

noOfSheds.addEventListener('keyup', function () {
      if (noOfSheds.value > 26) {
            noOfSheds.value = 26;
      }
      setTimeout(() => {
            generateSelect(noOfSheds.value);
      }, 1000);
      setTimeout(() => {
            noOfSheds.disabled = "1";
      }, 3000);
});

function generateSelect(noOfSheds) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let alphabetArray = alphabet.split('');
      for (let i = 0; i < noOfSheds; i++) {
            let option = document.createElement('option');
            option.value = alphabetArray[i];
            option.text = `shed  ${alphabetArray[i]}`;
            select.appendChild(option);
      }
}

add.addEventListener('click', function () {
      p.innerHTML = ""
      if (noOfLitres.value && select.value != "") {
            if (!sheds[select.value]) {
                  sheds[select.value] = noOfLitres.value;
                  noOfLitres.value = "";
            }
            else {
                  alert("Shed already exists");
                  select.value = "";
                  noOfLitres.value = "";
            }

      }
});

function totalProduction() {
      for (let key in sheds) {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML = `Shed ${key}`;
            td2.innerHTML = `${sheds[key]} Litres`
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
      }
}
//function incomeOverTime(sellingPrice,time)
function incomeOverTime(sellingPrice, time, noOfLitres) {
      let income = 0;
      income = sellingPrice * noOfLitres * time;
      return income;
}

submit.addEventListener('click', function (e) {
      e.preventDefault();
      totalProduction();
      let totalIncome = 0;
      let totalNoOfLiters = 0;
      for (let key in sheds) {
            totalNoOfLiters += sheds[key];
      }
      console.log(sheds)
      totalIncome = incomeOverTime(price, 1, totalNoOfLiters);
});

// function allYearIncome() {

// }



