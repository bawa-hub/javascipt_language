// const os = require("os");
// console.log(os.arch());

function printHello() {
  console.log("Hello");
}
function blockFor1Sec() {}
setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");
