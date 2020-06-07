// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
//   var myHorse = new Horse();
//   var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makeHorse = function(name) {
  var result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name + ' is galloping to ' + destination + '!';
  };
  return result;
};


var makeFlyingHorse = function(name, color) {
  var result = makeHorse(name);
  result.color = color;

  var oldGoSomewhere = result.goSomewhere;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere(destination);
    } else {
      return this.name + ' is flying to ' + this.destination + '!';
    }
  };
  return result;
};


// YOUR WORK GOES BELOW
// Here's some starter code to get you going!
// Do not use the ES6 `class` keyword; use ES5 to create your classes.
var Horse = function(name) {

  this.name = name;

};
  Horse.prototype.goSomewhere = function(destination) {
      this.destination = destination;
    return this.name + ' is galloping to ' + this.destination + '!';
  };

var FlyingHorse = function(name, color) {
    //console.log(Horse(name))

  Horse.call(this, name);
  this.color = color;
}

FlyingHorse.prototype = Object.create(Horse.prototype)
FlyingHorse.prototype.constructor = FlyingHorse;

FlyingHorse.prototype.goSomewhere = function(destination, milesToDestination) {
  // if miles is less than 10
  if (milesToDestination < 10) {
    // go to horse go somewhere
    return Horse.prototype.goSomewhere.call(this, destination);
  } else {
    // go to flying horse go somewhere
    return this.name + ' is flying to ' + destination + '!';
  }


  // else
}

var newHorse = new Horse('horse');
console.log(newHorse.goSomewhere('ny'));
var newFlyingHorse = new FlyingHorse('flyinghorsename', 'red');
console.log(newFlyingHorse.goSomewhere('texas', 8));
console.log(newFlyingHorse.goSomewhere('texas', 13));


















//   var oldGoSomewhere = goSomewhere;
//   this.goSomewhere = function(destination, milesToDestination) {
//     if (milesToDestination < 10) {
//       return this.oldGoSomewhere(destination);
//     } else {
//       return this.name + ' is flying to ' + this.destination + '!';
//     }
//   };
// };

// //create instance for horse & FlyingHorse
// var myHorse = new Horse('new horse');
// myHorse.goSomewhere('ny');
// var myFlyingHorse = new FlyingHorse('katie', 'texas');
// myFlyingHorse.result;
// myFlyingHorse.color;
// myFlyingHorse.goSomewhere('somewhere', '7miles');