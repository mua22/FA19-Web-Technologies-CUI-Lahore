var func1 = () => console.log("funct 1");
var func2 = () => console.log("funct 2");

// module.exports = {
//   func1,
//   func2: func2
// };
module.exports.func1 = func1;
module.exports.func2 = func2;
