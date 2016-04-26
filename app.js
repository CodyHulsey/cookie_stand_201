var hours = ['10AM:', '11AM:', '12AM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:',];

var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 88,
  avgSales: 5.2,
  hourlySales: [],
  totals: 0,
  grandTotal: 0,
  customerPerHour: function () {
  return Math.random() * (this.max - this.min) + this.min;
},
  generateHourly: function(arr, totals, avg, rand, hour) {
    for(var j = 0; j < hour.length; j++) {
        var ran = Math.floor(rand() * avg);
        arr.push(ran);
        totals += ran;
        }
},

  render: function() {
    this.generateHourly();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('pikePlace').appendChild(ulEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totals;
    ulEl.appendChild(liEl_two);
  }
}
// var sectionEl = document.getElementById('pike-Place');
// var ulEl = document.createElement('ul');
//
// for(hour in hours) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hours[hour];
//   var nestedUlEl = document.createElement('ul');
//   // for(value in demand) {
//   //   var nestedLiEl = document.createElement('li');
//   //   nestedLiEl.textContent = demand[value];
//   //   nestedUlEl.appendChild(nestedLiEl);
//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
//
// sectionEl.appendChild(ulEl);

//var stores = [
//   pikeStore,
//   alkiStore,
//   seaTacStore,
//   bellevueSqStore,
//   southCenterStore,
// ];
//for(var k = 0; k < stores.length; k++)
//stores.render(k);
