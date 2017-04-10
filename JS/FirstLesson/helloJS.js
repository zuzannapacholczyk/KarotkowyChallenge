var zmienna = 'global';

var fun = function() {
    console.log(zmienna);
    var zmienna = 'local';
    console.log(zmienna);

};

// fun();

var animal = {},
    person = {
        name: 'John',
        age: 28
    };

console.log(person.age);
console.log('Zupa');

delete person.name;
console.log(person.name);


var myFun = function() {
    var a = 2,
        b = 3,

        innFun = function() {
            var b = 13,
                c = 14;
            console.log(c + ' in inn1 use');
            a = 12;
        };
    //   console.log(c + ' fist use');
    innFun();
    // console.log(c + ' last use'); c is not defined
};
myFun();
console.log(myFun.a);
