export function pipeLineTaskRefParser() {


    let textAreaEl = document.getElementById('payload')
    let pipeLine = JSON.parse(textAreaEl.value);  
    let operators = pipeLine.nodes;
  
    let taskOperators = operators.filter((item) => {
      return item.operator["taskType"] !== undefined;
    });
  
    let liEls = taskOperators
      .map((item) => {
        return `<li>${item.operator.task.key.split(":")[1]}</li>`;
      })
      .join("")
      .trim();
  
    let ulEl = document.getElementById("pipe-obj-li");
  
    ulEl.innerHTML = liEls;
  
  
  }


  export function integrationTaskRefParser() {


    let textAreaEl = document.getElementById('payload')
    let payload = JSON.parse(textAreaEl.value);  
    let nodes = payload.pipeline.nodes;
  
    let taskOperators = nodes.filter((item) => {
      return item.operator["modelType"] === 'TASK_OPERATOR';
    });

    

    let integrationTasks = taskOperators.filter((item) => {
        return item.operator.task["modelType"] === 'INTEGRATION_TASK';
    })
 
    let liEls = integrationTasks
      .map((item) => {
        return `<li>${item.operator.task.key}</li>`;
      })
      .join("")
      .trim();
  
    let ulEl = document.getElementById("intg-obj-li");
  
    ulEl.innerHTML = liEls;
  
  
  }


  export function sqlTaskRefParser() {


    let textAreaEl = document.getElementById('payload')
    let payload = JSON.parse(textAreaEl.value);  
    let nodes = payload.pipeline.nodes;
  
    let taskOperators = nodes.filter((item) => {
      return item.operator["modelType"] === 'TASK_OPERATOR';
    });

    

    let integrationTasks = taskOperators.filter((item) => {
        return item.operator.task["modelType"] === 'SQL_TASK';
    })
 
    let liEls = integrationTasks
      .map((item) => {
        return `<li>${item.operator.task.key}</li>`;
      })
      .join("")
      .trim();
  
    let ulEl = document.getElementById("sql-obj-li");
  
    ulEl.innerHTML = liEls;
  
  
  }


  


  export function dataFlowRefParser() {


    let textAreaEl = document.getElementById('payload')
    let payload = JSON.parse(textAreaEl.value);  
    let key = payload.dataFlow.key;

      
    let ulEl = document.getElementById("df-obj-li");
  
    ulEl.innerHTML = `<li>${key}</li>`;
  
  
  }