
let id =0

function createEmployee(name, salary){
        return {
            id:++id,
            name:name,
            salary:salary
        }
}

let nanda = createEmployee('nanda','10K')

let display = function () {
    console.log(this.name, this.salary);    
}

display.call(nanda)