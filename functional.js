function addProduct(currentBasket, name, price, count = 1){
    return [
        ...currentBasket,
        {
            name,
            price,
            count,
        }
    ]
};

function itemNames(basket){
    return basket.map(item => item.name);
};

function pricesSum(basket){
    return basket.reduce((prev, curr) => prev + curr.price * curr.count, 0);
};

const basketWithBread = addProduct([], 'bread', 2.5);
const basketWithBreadAndCucumber = addProduct(basketWithBread, 'cucumber', 4, 5);

console.log(itemNames(basketWithBreadAndCucumber));
console.log('Sum', pricesSum(basketWithBreadAndCucumber));