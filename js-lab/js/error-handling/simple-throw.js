const apiResponseCode = 404;

try {
  if (apiResponseCode === 404) {
    throw new Error("Resource node found");
  }
} catch (err) {
  console.log(err.stack);
}
