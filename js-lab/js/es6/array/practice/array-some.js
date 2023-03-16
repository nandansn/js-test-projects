// some item in the array should satisfy the condition


let names = ['A','B','C','A']

let status = names.some(g => g === 'A') ? 'TOPPER' :'NOT TOPPER'

console.log(status)