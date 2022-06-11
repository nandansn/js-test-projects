export function pipeLineTaskRefParser() {


    let textAreaEl = document.getElementById('payload')
    let pipeLine = JSON.parse(textAreaEl.value);  

    console.log(pipeLine);
    let operators = pipeLine.nodes;

    console.log(operators);
  
    let taskOperators = operators.filter((item) => {
      console.log(item.operator);
      return item.operator["taskType"] !== undefined || item.operator['task_type'] !== undefined;
    });

    
  
    let liEls = taskOperators
      .map((item) => {

        let taskKey = item.operator.task.key;
        

        if (taskKey.includes('drsRef')) {
          taskKey = item.operator.task.key.split("/").at(-1)
        }  else if (taskKey.includes(':')) {
          taskKey = item.operator.task.key.split(":").at(-1)
        }

        return `<li>${taskKey}</li>`;
      })
      .join("")
      .trim();
  
    let ulEl = document.getElementById("pipe-obj-li");
  
    ulEl.innerHTML = liEls;
  
  
  }


  export function integrationTaskRefParser() {


    let textAreaEl = document.getElementById('payload')
    let payload = JSON.parse(textAreaEl.value);  

    console.log(payload);
    let nodes = payload.nodes;


    let taskOperators = nodes.filter((item) => {
      console.log(item);
      return item.operator["modelType"] === 'TASK_OPERATOR';
    });

    console.log(taskOperators);

    let integrationTasks = taskOperators.filter((item) => {
      //console.log(item);
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