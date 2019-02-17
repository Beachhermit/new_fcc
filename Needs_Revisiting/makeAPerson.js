var Person = function(firstAndLast) {
  //this one was super fiddly - testing code I left in affected the outcome.
  //needs revisiting to get more familiar with how objects work.

    let fullName = firstAndLast;
    
  this.setFullName = function(name) {
      fullName = name;
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(firstName) {
    fullName = firstName + " " + fullName.split(" ")[1];;
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.setLastName = function(lastName) {
    fullName = fullName.split(" ")[0] + " " + lastName;
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
//bob.setFirstName("Harry");
//console.log(bob.getFirstName());
console.log(Object.keys(bob).length);
//console.log(bob.getFullName());