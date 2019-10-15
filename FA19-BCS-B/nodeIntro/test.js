function sayHello() {
  console.log("Hello Class");
}
let sayHi = () => console.log("Hi");
//sayHello();
//sayHi();

module.exports.hi = sayHi;
module.exports.hello = sayHello;
