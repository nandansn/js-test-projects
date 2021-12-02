let person_names = ['nanda', 'kumar', 'sanmathi', 'gayathri'];

person_names
  .filter((pname) => pname.startsWith('an', 1))
  .forEach((pname) => console.log(pname));

person_names
  .filter((pname) => pname.endsWith('i'))
  .forEach((pname) => console.log(pname));



