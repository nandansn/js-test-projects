// var is function scope.

var gName = 'global kumar';
console.log(gName);

{
  console.log(gName);
  var gName = 'block kumar';
  console.log(gName);
}

console.log(gName);

update();
function update() {
  console.log(gName);
  var gName = 'function scope kumar';
  console.log(gName);
}

console.log(gName);
