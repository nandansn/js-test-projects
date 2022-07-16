function calc() {
  try {
    undefinedVariable;
  } catch {
    console.log("Catch");
  }
}

calc();
