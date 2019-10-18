// console.log(__dirname);

function test() {
  console.log("From test");
}
var anotherTest = () => console.log("Another test");
// test();
// anotherTest();

module.exports = anotherTest;
