var hours = ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM',];

function Store(name, min, max, avgSales) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.hourlySales = [];

}

Store.prototype.customerPerHour = function (min, max) {
  return Math.random() * (this.max - this.min) + this.min;
 //     },
};

Store.prototype.generateHourly = function() {
  for(var j = 0; j < hour.length; j++) {
    var ran = Math.floor(this.customerPerHour(this.max, this.min) * avg);
    arr.push(ran);
    this.totals += ran;
  }
};

Store.prototype.render = function() {
      this.generateHourly();

      var ulEl = document.createElement('ul');
      ulEl.appendChild(document.createTextNode(this.name));//this will create the text node right after the ul.
      var sectionEl = document.getElementById('pikePlace').appendChild(ulEl);//getting element by id and assigning it that sectoin.

      for(var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + this.hourlySales[i]; //accessing two arrays with i.
        ulEl.appendChild(liEl); //once built. we append to the ul.
      }
      var liEl_two = document.createElement('li');
      liEl_two.textContent = 'Total: ' + this.totals;
      ulEl.appendChild(liEl_two);
    }
  };

var pikeStore = new Store('Pike Place', 17, 88, 5.2); //Instantiating a new object. Creating a new instance of store.
var sluStore = new Store('SLU', 17, 88, 5.2); //Instantiating a new object. Creating a new instance of store.


//DO RESEARCH: how do we dynamically add an array to an object. We will not have to do var pikeStore...above code.
