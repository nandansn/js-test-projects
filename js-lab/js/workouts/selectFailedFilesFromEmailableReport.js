// Need to create browser plugin
// Need to group test data failures
// Need to group service failures
// We can access the failure content using the url: https://teamcity.oci.oraclecorp.com/repository/download/DisDevSanity/34945959:id/crud_sanityTest_report.zip!/emailable-report.html#m7, here m1/m7/m3 is the test case section, from there we can get the test details



let path = "div.messages";

let allTest = Array.from(document.querySelectorAll("div.messages"));


let testObjs = []

let nullsFiles = []

let testFailureGroup = new Map();

let filterMessage = ""

allTest.forEach((test,index) => {
    //let dataFile = test.innerText.split('\n')[4]
    //"Test File Name:"
    let splitCondtion = ""
    if (test.innerHTML.includes("Test File Name:")) {
      splitCondtion = "Test File Name:";
    }
    if (test.innerHTML.includes("Test Data File:")) {
      splitCondtion = "Test Data File:";
    }
    let dataFile = test.innerHTML.split(splitCondtion)[1].split("br")[0];
    let filePath = undefined
    if (dataFile.includes('/main/')) {
      filePath = dataFile.split("/main/")[1].replace("<", "");
    } else if (dataFile.includes("Starting import test for resource file:")) {
      filePath = dataFile
        .split("Starting import test for resource file:")[1]
        .replace("<", "");
    }
    console.log(filePath);
    let testObj = {}
    testObj.filePath = filePath;
    testObj.errorResponse = test.innerText
      .split("\n")
      .find(
        (element) =>
          element.includes('"status":"ERROR"') ||
          element.includes('"patchStatus":"FAILED"') ||
          element.includes('"code" : "BadRequest"')
      );

   

   
    console.log(index)
    if (document
      .querySelectorAll("div.stacktrace")[index]) {
         testObj.error = document
           .querySelectorAll("div.stacktrace")
           [index].innerText.split("\n")[0];
         testObjs.push(testObj);

         if (testObj.error.includes(filterMessage)) {
           nullsFiles.push(filePath);
         }
      } 

      if (testFailureGroup.has(testObj.error)) {
        testFailureGroup.get(testObj.error).push(filePath);
      } else {
        let list = [];
        list.push(filePath);
        testFailureGroup.set(testObj.error, list);
      }
   
})

console.log(JSON.stringify(testObjs))

console.log(JSON.stringify(Object.fromEntries(testFailureGroup)));