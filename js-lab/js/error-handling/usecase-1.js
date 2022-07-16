let json = "{ bad json }";

try {
  let data = JSON.parse(json);
  console.log(data);
} catch (error) {
  console.log(
    `Error Details:\nName:${error.name}\nMessage:${error.message}\nStackTrace: ${error.stack}`
  );
}
