let person = {
    "first": "Nicole",
    "last": "Adelstein",
    "married": true,
    "hobbies": ['books','music']
  }
  console.log(Object.keys(person));

  console.log(Object.values(person));

  console.log(Object.entries(person));


  Object.entries(person).forEach((k,v) => {
      console.log(k);
  })