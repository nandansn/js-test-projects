


  document
    .querySelectorAll("div.stack-trace")[0]
    .previousElementSibling.previousElementSibling.parentElement.previousElementSibling.querySelectorAll(
      "a"
    )[1]
    .click();


let path = "div.stack-trace";;

let allStacktraces = document.querySelectorAll("div.stack-trace");

let testObjs = [];

let testFailureGroup = new Map()

allStacktraces.forEach((stElement,index) => {
        let testObj = {};
        let file = document
          .querySelectorAll("div.stack-trace")
          [index].parentElement.previousElementSibling.querySelectorAll("br")[6]
          .nextSibling.wholeText.split("/main/")[1];
        console.log(index);
        testObj.filePath = file;
        let errorDetails = document
          .querySelectorAll("div.stack-trace pre")
          [index].innerText.split("\n");

        testObj.error = errorDetails[0]
        testObj.errorDetail = errorDetails;
        
          testObjs.push(testObj)

        
         if (testFailureGroup.has(testObj.error)) {
            testFailureGroup.get(testObj.error).push(file);
         } else {
           let list = []
           list.push(file)
           testFailureGroup.set(testObj.error, list)
         }
        
})

console.log(JSON.stringify(testObjs));

console.log(JSON.stringify(Object.fromEntries(testFailureGroup)));

