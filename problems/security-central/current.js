(function securitySentral(params) {

    let securityShieldIconPath =
  '//div[@id="app"]//button/span//*[@data-icon="shield"]';
let securityMenuItemPath =
  '//div//ul[@class="bp3-menu"]//li/a[contains(@href,"/security/central")]';
let overDueLinkPath = "//a/div/span[text()='Due This Cycle']";

let taskIds = [];

let MIN_TIME_OUT = 3000;
let MID_TIME_OUT = 10000;
let GENERATE_TIME_OUT = 300000;
let newReportFlag = true;

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
        res("click - event completed");
      } else {
        rej("error");
      }
    }, timeout);
  });
}

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
        return new Promise(() => {
            setTimeout(()=> {
                console.log('wait..')
                res('done')
            }, MID_TIME_OUT)
        })
      })
      .catch((err) => {
        console.log("Error");
        rej("error");
      });
  });
}

function getTaskIds() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let taskRows = document.querySelectorAll(
        "div.ReactVirtualized__Grid__innerScrollContainer div[data-cy='tableRow']"
      );
      
      Array.from(taskRows).forEach((row, index) => {
        let id = row.firstChild.firstChild.href.split("/").pop();
        taskIds.push(id);
      });
      res("data");
    }, 1000);
  });
}

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

function checkStatusAndDownload(taskId) {
  console.log("check status...");
  var status = "success";
  let URL = `https://devops.oci.oraclecorp.com/api/horus/oc1/v1/exportrequests/getLastExportRequest?exportRequestOwner=data_integration_service&exportRequestRemediationId=${taskId}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "Completed") {
        downloadReport(taskId, data.fileName);

        console.log("download");
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
      a.download = fileName;
      a.click();
    });
}

gotoTasks()
  .then((data) => {
    console.log("Trying to get Task Ids...");
    getTaskIds();
    
  })
  .then((data) => {
    console.log("Listed Tasks:");
    console.log(taskIds);
    if (newReportFlag) {
      console.log("Trying to get generate the report...");
      let genRepActions = taskIds.map(generateReport);
      Promise.all(genRepActions);
      console.log("Waiting for the reports...");
    } else {

      return new Promise((res,rej)=> {
        GENERATE_TIME_OUT = 1000;
        res('data');
      })
     
    }
  })
  .then((data) => {
    setTimeout(() => {
      let actions = taskIds.map(checkStatusAndDownload);
      Promise.all(actions);
      
    }, GENERATE_TIME_OUT);
  })
})();

