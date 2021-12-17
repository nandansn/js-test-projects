let calculateBonus =  function (bonusPercent) {
    this.e_bonus = (this.e_salary * bonusPercent) / 100;
}

let employees = [{
    e_name:'nanda',
    e_age:40,
    e_salary:100

},{
    e_name:'kumar',
    e_age:40,
    e_salary:10
    
}]

employees.map(emp => {
    calculateBonus.call(emp,10)
})

console.log(employees)