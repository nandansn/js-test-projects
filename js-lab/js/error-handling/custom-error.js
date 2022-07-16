class DataError extends Error {
  constructor(property) {
    super(`Missing Property:${property}`);
    this.name = "Data Error";
  }
}

function readUser() {
  let user = JSON.parse('{ "name":"nanda"}');
  if (!user?.age) {
    throw new DataError("Age");
  }

  return user;
}

function displayUser() {
  try {
    readUser();
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}

displayUser();
