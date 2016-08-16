function Person(firstname, lastname){
  this.firstname = firstname
  this.lastname = lastname
}

Person.prototype.greet = function(){
  console.log(this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'doe');

console.log(john.firstname);
john.greet();
