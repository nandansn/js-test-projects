function triggerClick(target, options) {
  var event = target.ownerDocument.createEvent("MouseEvents"),
    options = options || {},
    opts = {
      // These are the default values, set up for un-modified left clicks
      type: "click",
      canBubble: true,
      cancelable: true,
      view: target.ownerDocument.defaultView,
      detail: 1,
      screenX: 0, //The coordinates within the entire page
      screenY: 0,
      clientX: 0, //The coordinates within the viewport
      clientY: 0,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
      button: 0, //0 = left, 1 = middle, 2 = right
      relatedTarget: null,
    };

  //Merge the options with the defaults
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      opts[key] = options[key];
    }
  }

  //Pass in the options
  event.initMouseEvent(
    opts.type,
    opts.canBubble,
    opts.cancelable,
    opts.view,
    opts.detail,
    opts.screenX,
    opts.screenY,
    opts.clientX,
    opts.clientY,
    opts.ctrlKey,
    opts.altKey,
    opts.shiftKey,
    opts.metaKey,
    opts.button,
    opts.relatedTarget
  );

  //Fire the event
  target.dispatchEvent(event);
}

function checkAndClick(htmlElementPath, timeout) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let htmlElement = document.evaluate(
        htmlElementPath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (htmlElement) {
        triggerClick(htmlElement);
        res("done - event completed");
      } else {
        rej("error");
      }
    }, timeout);
  });
}

let securityShieldIconPath =
  '//div[@id="app"]//button/span//*[@data-icon="shield"]';

let securityMenuItemPath =
  '//div//ul[@class="bp3-menu"]//li/a[contains(@href,"/security/central")]';

//let dataIntegrationLinkPath = "//div[@class='ReactVirtualized__Table__rowColumn']//a[text()='Data Integration Service']";

let overDueLinkPath = "//a/div/span[text()='Due This Cycle']";

let MIN_TIME_OUT = 3000;

let MID_TIME_OUT = 30000;

function gotoTasks() {
  return new Promise((res, rej) => {
    checkAndClick(securityShieldIconPath, MIN_TIME_OUT)
      .then((status) => {
        console.log(status);
        return checkAndClick(securityMenuItemPath, MIN_TIME_OUT);
      })
      .then((status) => {
        console.log(status);
        return checkAndClick(overDueLinkPath, MID_TIME_OUT);
      })
      .then((status) => {
        res("done");
      })
      .catch((err) => {
        console.log("Error");
        rej("error");
      });
  });
}

gotoTasks();


// function clickHtmlElement(htmlElement, timeout) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (htmlElement) {
//         triggerClick(htmlElement);
//         res("done - event completed");
//       } else {
//         rej("error");
//       }
//     }, timeout);
//   });
// }

// function captureTasks() {
//   gotoTasks().then((data) => {
//     let htmlElement = document.querySelectorAll(
//       "div.ReactVirtualized__Grid__innerScrollContainer div[data-cy='tableRow'] div.ReactVirtualized__Table__rowColumn"
//     )[0].firstChild;
//     clickHtmlElement(htmlElement, MID_TIME_OUT)
//       .then((data) => {
//         gotoTasks();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// }

// captureTasks();

// https://devops.oci.oraclecorp.com/security/central/oc1/tasks/060b1e08-a6ce-4a13-ad95-b93bee6edf16

let taskIds = [];

function getTaskIds() {
  let taskRows = document.querySelectorAll(
    "div.ReactVirtualized__Grid__innerScrollContainer div[data-cy='tableRow']"
  );
  Array.from(taskRows).forEach((row, index) => {
    let id = row.firstChild.firstChild.href.split("/").pop();
    taskIds.push(id);
  });
}

getTaskIds();

console.log(taskIds);

function generateReport(taskId) {
  let reportGenerateUrl =
    "https://devops.oci.oraclecorp.com/api/horus/oc1/v1/exportrequests";

  let payload = {
    userName: "nrangasa",
    owner: "data_integration_service",
  };

  payload["remediationId"] = taskId;

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(payload),
  };

return fetch(reportGenerateUrl, options)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

let genRepActions = taskIds.map(generateReport);

Promise.all(genRepActions)

/////////////////////////////////////////

function checkStatusAndDownload(taskId) {
  console.log("check status...");
  var status = "success";
  let URL = `https://devops.oci.oraclecorp.com/api/horus/oc1/v1/exportrequests/getLastExportRequest?exportRequestOwner=data_integration_service&exportRequestRemediationId=${taskId}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === 'Completed') {
        downloadReport(taskId,data.fileName)

        console.log('download');
      }
    });
    
  
}

function downloadReport(taskId, fileName) {
    let url = `https://devops.oci.oraclecorp.com/api/horus/oc1/v1/exportrequests/getLastExportRequest?exportRequestOwner=data_integration_service&exportRequestRemediationId=${taskId}`;
  
    console.log(taskId, fileName);
  
    fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download =
        fileName;
        a.click();
      });
  }


let actions = taskIds.map(checkStatusAndDownload)

Promise.all(actions)




