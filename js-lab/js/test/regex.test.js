


(function name() {
    let items = Array.from(document.querySelectorAll("a h3"));
    let regex = /buy/i;
    let filtered = items.filter((item) => {
      let text = item.textContent;
      return regex.test(text);
    });
    filtered.forEach((item) => {
      console.log(item.textContent);
    });
})()