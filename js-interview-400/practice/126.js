const myObject = {
  key1: "value1",
  key2: 2,
  key3: true,
  key4: ["apple", "banana", "orange"],
  key5: {
    innerKey1: "innerValue1",
    innerKey2: "innerValue2",
  },
};

Object.keys(myObject).forEach((key) => {
  console.log(myObject[key]);
});
