const dataObj = require('./data.js');







// let filterMessage =
//   " found \\[[0]+\\]";

let filterMessage = "";

let out = dataObj.dataObjs
  .filter((item) => {
    return item.error.match(filterMessage);
  })
  .map((item) => item.filePath)
  .join(",");


console.log(`Total files: ${out.split(',').length}`)
console.log(out);

console.log("================================================================================================");

// out.split(',').forEach(file => {
//   console.log(file)
// })

dataObj.dataObjs.filter((item) => {
  return item.error.match(filterMessage);
}).forEach(item => {
  console.log(item.filePath + "  ||   " + item.error )
})