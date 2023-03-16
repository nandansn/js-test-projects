import { pipeLineTaskRefParser, integrationTaskRefParser, dataFlowRefParser, sqlTaskRefParser } from "./parser-impl.js";


document.getElementById('btn-pipeline').addEventListener('click', function () {
    pipeLineTaskRefParser()
})

document.getElementById('btn-pipeline-clear').addEventListener('click', function () {
    let ulEl = document.getElementById("obj-li");
    ulEl.innerHTML = ''
})


document.getElementById('btn-intg').addEventListener('click', function () {
    integrationTaskRefParser()
})

document.getElementById('btn-intg-clear').addEventListener('click', function () {
    let ulEl = document.getElementById("intg-obj-li");
    ulEl.innerHTML = ''
})


document.getElementById('btn-sql').addEventListener('click', function () {
    sqlTaskRefParser()
})

document.getElementById('btn-sql-clear').addEventListener('click', function () {
    let ulEl = document.getElementById("intg-obj-li");
    ulEl.innerHTML = ''
})

document.getElementById('btn-df').addEventListener('click', function () {
    dataFlowRefParser()
})

document.getElementById('btn-df-clear').addEventListener('click', function () {
    let ulEl = document.getElementById("df-obj-li");
    ulEl.innerHTML = ''
})
