// var submit = document.getElementById('test');
//
// function foo() {
//   // console.log('hello word');
//   console.log(this);
//   // this.removeEventListener('click', foo);
// }
// // submit.addEventListener('click', foo);
//
// var formEl = document.getElementById('myForm');
// var inputSN = document.getElementById('storeName');
// var inputmin = document.getElementById('min');
// var inputmax = document.getElementById('max');
// var tableEl = document.getElementById('myForm');
//

// function getInputs() {
//   event.preventDefault();
//   console.log(event.target);
// }

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // console.log(event.target[1].value);
  console.log(typeof inputAge.value);
  var trEl = document.createElement('tr');
  var tdOne = document.createElement('td');
  var tdTwo = document.createElement('td');
  var tdThree = document.createElement('td');
  tdOne.textContent = inputFN.value;
  tdTwo.textContent = inputLN.value;
  tdThree.textContent = inputAge.value;
  trEl.appendChild(tdOne);
  trEl.appendChild(tdTwo);
  trEl.appendChild(tdThree);
  tableEl.appendChild(trEl);
});

function Store(name, min, max, avgSales, hourlySales, totals, customerPerHour, generateHourly) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = hourlySales;
  this.totals = 0;
}

Store.prototype.customerPerHour = function(min, max) {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.generateHourly = function(arr, totals, avg, ran, hour) {
  for(var j = 0; j < hour.length; j++) {
    var ran = Math.floor(this.customerPerHour(this.max, this.min) * avg);
    arr.push(ran);
    this.totals += ran;
  }
};

// (Store.renderTable = function() {
//
// }

Store.prototype.render = function() {
  this.generateHourly(this.hourlySales, this.totals, this.avgSales, this.customerPerHour, hours);
  var tableEl = document.getElementById('stores');
  var newStore = document.createElement('th');
  tableEl.appendChild(newStore);
  var ulEl = document.createElement('th');

  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('th');
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liEl_two = document.createElement('th');
  liEl_two.textContent = 'Total: ' + this.totals;
  ulEl.appendChild(liEl_two);
  newStore.textContent = this.name;
  newStore.appendChild(ulEl);
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2, []);
var seaTacAirport = new Store('SeaTac Airport', 6, 24, 1.2, []);
var Southcenter = new Store('Southcenter', 11, 38, 1.9, []);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, []);
var alki = new Store('Alki', 3, 24, 2.6, []);

var hours = ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM',];

// var tbl;


pikePlace.render();
seaTacAirport.render();
Southcenter.render();
bellevueSquare.render();
alki.render();
