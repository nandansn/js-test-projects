const apiResponseCode = 404;

try {
  if (apiResponseCode === 404) {
    throw new Error(404);
  }
} catch (err) {
  console.log(err.message);
  if (err.message === "404") {
    console.log(err.stack);
  } else {
    console.log("re-throwing");
    throw new Error(500);
  }
}
