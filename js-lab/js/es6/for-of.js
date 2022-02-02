let name = 'nanda kumar';

for (const char of name) {
    console.log(char)
}

let days = ['mon','sun','sat','tue','wed']

for (const day of days) {
    if (day === 'sun') {
        break;
    } else {
        console.log(day)
    }
}

