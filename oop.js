class Basket {
    constructor () {
        this.items = [];
    }

    add(name, price, count = 1) {
        this.items.push({
            name,
            price,
            count,
        });
    }

    names() {
        return this.items.map(item => item.name);
    }

    sum(){
        return this.items.reduce((prev, curr) => prev + curr.price * curr.count, 0)
    }
};

const basket = new Basket();
basket.add('bread', 2.5);
basket.add('cucumber', 4, 5);

console.log(basket.names());
console.log('Sum', basket.sum());