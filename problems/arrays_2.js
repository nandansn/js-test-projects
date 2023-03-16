let marks = [10, 20, 30];

let total = marks.reduce((tot, cMark) => {
  tot = tot + cMark;
  return tot;
}, 0);

console.log(total);
