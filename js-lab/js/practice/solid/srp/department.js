 
class Employee {
    constructor(salary){
        this.salary = salary
    }

    calculateBonus() {
        return this.salary  + ((this.salary * 10) / 100)
    }
    
}

module.exports = {
    Employee
}