var person = {
  name : 'Zuza',
  sayHello : function() {
    console.log(this.name);
  }
};

person.sayHello();

// lub
var Person = function() {
  this.name = 'Basia';
};

var person2 = new Person();
console.log(person2.name);

// lub

var person3 = {
  name : 'Asia',
  sayHello : function() {
    console.log(this.name);
  }
};

person3.sayBye = function() {
    var helper = function() {
      console.log(this.name);
    };

    helper();

};

person3.sayBye();
person3.sayHello();

var person4 = {
  name : 'ktos',
  sayHello : function() {
    console.log(this.name);
  }
};
person4.sayBye = function(this) {
    var that = this,
    helper = function() {
      console.log(that.name);
    };

    helper();

};

person4.sayBye(person4);
person4.sayHello();
