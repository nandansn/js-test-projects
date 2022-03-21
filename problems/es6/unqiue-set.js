let nums = [1,2,4,4,5,5,6,7,7,8]

let uniqueSet = new Set(nums);

console.log(uniqueSet);


let persons = [
    {
        com:'oracle'

    },
    {
        com:'apple'
        
    },
    {
        com:'oracle'
        
    },
    {
        com:'adobe'
        
    }

]

let uniqueCompanies = new Set(persons.map(p=> {
    return p.com;
}))

console.log(uniqueCompanies);