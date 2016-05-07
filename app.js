var hours = ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM',];

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTacAirport = new Store('SeaTac Airport', 6, 24, 1.2);
var Southcenter = new Store('Southcenter', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

function Store(name, min, max, avgSales) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.totals = 0;
}

Store.prototype.customerPerHour = function(min, max) {
  return Math.random() * (this.max - this.min) + this.min;
};

Store.prototype.generateHourly = function(arr, totals, avg, ran, hour) {
  for(var j = 0; j < hours.length; j++) {
    var ran = Math.floor(this.customerPerHour(this.max, this.min) * this.avgSales);
    this.hourlySales.push(ran);
    this.totals += ran;
  }
};

var tableEl = document.getElementById('stores');
var rowEl = document.createElement('tr');
var emptyCell = document.createElement('th');
var totalsTitle = document.createElement('th');

emptyCell.textContent = '';
totalsTitle.textContent = 'Totals';

tableEl.appendChild(rowEl);
rowEl.appendChild(emptyCell);

for(var i = 0; i < hours.length; i++) {
  var tHours = document.createElement('th');
  tHours.textContent = hours[i];
  rowEl.appendChild(tHours);
}
rowEl.appendChild(totalsTitle);

Store.prototype.render = function() {
  this.generateHourly();

  var dataRows = document.createElement('tr');
  var tdStoreNames = document.createElement('tr');
  tdStoreNames.appendChild(document.createTextNode(this.name));
  dataRows.appendChild(tdStoreNames);
  tableEl.appendChild(dataRows);

  for(var i = 0; i < hours.length; i++) {
    var dataHours = document.createElement('td');
    dataHours.textContent = this.hourlySales[i];
    dataRows.appendChild(dataHours);
  }
  var dataTotals = document.createElement('td');
  dataTotals.textContent = this.totals;
  dataRows.appendChild(dataTotals);
};

pikePlace.render();
seaTacAirport.render();
Southcenter.render();
bellevueSquare.render();
alki.render();

Store.renderNew = function(obj) {
  var newRow = document.createElement('tr');
  var nameTd = document.createElement('td');
  nameTd.textContent = obj.name;
  newRow.appendChild(nameTd);

  for(hour in hours) {
    var salesTd = document.createElement('td');
    salesTd.textContent = obj.hourlySales[hour];
    newRow.appendChild(salesTd);
  }
  var newTotalTd = document.createElement('td');
  newTotalTd.textContent = obj.totals;
  newRow.appendChild(newTotalTd);
  tableEl.appendChild(newRow);
};

var myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var newStoreName = event.target.storeName.value;
  var newMinCust = parseInt(event.target.min.value);
  var newMaxCust = parseInt(event.target.max.value);
  var newAvgCustSale = parseFloat(event.target.avg.value);
  var newShop = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);
  newShop.generateHourly();

  Store.renderNew(newShop);
});
