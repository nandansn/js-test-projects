let dp = () => {
    console.log(this)
}

let bp = function ()  {
    console.log(this)
}
let person = {

    fname:'nanda',
    dp,
    bp


}

person.dp()
person.bp()
