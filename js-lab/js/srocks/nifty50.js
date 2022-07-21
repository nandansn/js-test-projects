let stocks = Array.from(document.querySelectorAll("table#dataTable tr td a"))
  .map((el) => {
    return el.innerText;
  })
  .join("','");

console.log(stocks);
