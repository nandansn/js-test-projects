const car_brands = ['bmw', 'audi', 'tesla', 'honda', 'ford', 'toyota'];

console.log(car_brands.find((car) => car === 'honda'));

console.log(car_brands.findIndex((car) => car === 'honda'));

console.log(car_brands.every((car) => car === 'honda'));

console.log(car_brands.some((car) => car === 'honda'));
