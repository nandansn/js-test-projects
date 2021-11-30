// const is block scope.

const gName = 'global kumar';
console.log(gName);

{
  //console.log(gName); //this wont work, will get: Cannot access 'gName' before initialization
  let gName = 'block kumar';
  console.log(gName);
}

console.log(gName);

function update() {
  //console.log(gName); //this wont work, will get: Cannot access 'gName' before initialization
  let gName = 'function scope kumar';
  console.log(gName);
}
update();

console.log(gName);
