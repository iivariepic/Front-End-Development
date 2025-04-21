import PriceList, {getPrice, setPriceList} from "./priceList.js";

const samplePrices = [
    {
        itemid: 1,
        itemname: 'bottle',
        prices: [{ qty: 1, price: 1.25 }, { qty: 100, price: 1.10 }, { qty: 1000, price: 1.00 }]
    },
    {
        itemid: 2,
        itemname: 'glass',
        prices: [{ qty: 1, price: 2.50 }, { qty: 50, price: 2.00 }, { qty: 200, price: 1.60 }]
    },
    {
        itemid: 3,
        itemname: 'coffee cup',
        prices: [{ qty: 1, price: 5.00 }, { qty: 20, price: 3.00 }, { qty: 100, price: 2.50 }]
    }
];

PriceList.setPriceList(samplePrices);

console.log(PriceList.getPrice(1, 50));
console.log(PriceList.getPrice(2, 150));
console.log(PriceList.getPrice(3, 30));