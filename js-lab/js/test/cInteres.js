function compoundMoney(principal, rate, tenure, years) {

    let perYear = 12 / tenure 

    let totalTimes = perYear * years

    let info = []
    for (let index = 0; index < totalTimes; index++) {
        info.push({index: {principal}})
        let interest = (((principal * rate) / 100) / 12) * perYear
        principal = Math.round(principal + interest)
    }

    console.table(info)
    return principal
    
}

compoundMoney(800000, 6.75, 4, 10)