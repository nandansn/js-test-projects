let { data } = require("./sql-data");

// console.log(data);

let queries = data.map((item) => {
  return `insert into PRODUCTS values (${getValues(item)});`;
});

console.log(queries);

function getValues(item) {
  let productName = `${item["productname"]}`.replace("'", "''");
  let quantityperunit = `${item["quantityperunit"]}`.replace("'", "''");
  return (
    item["productid"] +
    "," +
    `'${productName}'` +
    "," +
    item["supplierid"] +
    "," +
    item["categoryid"] +
    "," +
    `'${quantityperunit}'` +
    "," +
    item["unitprice"] +
    "," +
    item["unitsinstock"] +
    "," +
    item["unitsonorder"] +
    "," +
    item["reorderlevel"] +
    "," +
    item["discontinued"]
  );
}
