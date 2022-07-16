function div(a, b) {
  setTimeout(() => {
    try {
      undefinedVariable;
      console.log("code executed");
    } catch (error) {
      console.log("error accured");
    }
  }, 1000);
  console.log("after try");
}

//div(10, "a");

function divTryWillNotWork(a, b) {
  try {
    setTimeout(() => {
      undefinedVariable;
      console.log("code executed");
    }, 1000);
  } catch (error) {
    console.log("error accured");
  }

  console.log("after try");
}

divTryWillNotWork(10, "a");
