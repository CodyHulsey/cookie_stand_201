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

Store.prototype.render = function() {
  this.generateHourly(this.hourlySales, this.totals, this.avgSales, this.customerPerHour, hours);
  var tableEl = document.getElementById('stores');
  var newStore = document.createElement('tr');
  tableEl.appendChild(newStore);
  var ulEl = document.createElement('th');

  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('tr');
    liEl.textContent = hours[i] + ': ' + this.hourlySales[i];
    ulEl.appendChild(liEl);
  }
  var liEl_two = document.createElement('tr');
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


pikePlace.render();
seaTacAirport.render();
Southcenter.render();
bellevueSquare.render();
alki.render();
