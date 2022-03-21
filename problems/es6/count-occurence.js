let nums = [1,2,3,4,2,3,5,6]

let occur = {

}

for (const key of nums) {
    
    if (occur[key]) {
        occur[key]+=1
    } else {
        occur[key] = 1;
    }
}
console.log(occur);