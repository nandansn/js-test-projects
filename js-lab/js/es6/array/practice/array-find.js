let names = ['A','B','C','C']

let status = names.find(g => g === 'D') ? 'FAILED' :'PASSED'

console.log(status)