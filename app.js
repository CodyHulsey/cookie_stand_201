var hours = ['10AM:', '11AM:', '12AM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:',];

var demand = [];

var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 81,
  avgSales: 5.2,
  hourlySales: [],
  totalSales: 0,
  customerPerHour: function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
},
  generateHourly: function (){
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.floor(this.avgSales * this.customerPerHour(this.min, this.max)));
      this.totalSales = this.totalSales + this.hourlySales[i];
  }
}
}

// customerPerHour(minCustomers, maxCustomers);

var sectionEl = document.getElementById('pike-Place');
var ulEl = document.createElement('ul');

for(hour in hours) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[hour];
  var nestedUlEl = document.createElement('ul');

  for(value in demand) {
    var nestedLiEl = document.createElement('li');
    nestedLiEl.textContent = demand[value];
    nestedUlEl.appendChild(nestedLiEl);
  }
  liEl.appendChild(nestedUlEl);
  ulEl.appendChild(liEl);
  }

sectionEl.appendChild(ulEl);
