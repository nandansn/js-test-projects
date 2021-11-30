// let is block scope.

let gName = 'global kumar';
console.log(gName);

{
  //console.log(gName); this wont work, will get undefined, wont access global
  let gName = 'block kumar';
  console.log(gName);
}

console.log(gName);

function update() {
  //console.log(gName); this wont work, will get undefined, wont access global
  let gName = 'function scope kumar';
  console.log(gName);
}
update();

console.log(gName);
