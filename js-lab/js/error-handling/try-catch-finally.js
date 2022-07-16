try {
  let name = "nanda";
} catch {
} finally {
  console.log(name); // will throw name is not defines
}

try {
  var name = "nanda";
} catch {
} finally {
  console.log(name); // will throw name is not defines
}
