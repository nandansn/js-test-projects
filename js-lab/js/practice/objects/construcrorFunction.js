function Person(fname,lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    

}



let name = new String("nanda kumar ").trim()

Person.prototype.info = function () {
  console.log(this.fname);
};

new Person("nanda", "kumar", 40).info()

