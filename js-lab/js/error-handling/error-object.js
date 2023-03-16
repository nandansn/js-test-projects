function calc() {
  try {
    anyUndefinedVariable;
  } catch (error) {
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack", error.stack);
  }
}

calc();
