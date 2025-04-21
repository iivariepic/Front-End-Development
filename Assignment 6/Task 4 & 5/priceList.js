let priceList = [];

function setPriceList(thePriceList) {
    priceList = [...thePriceList];
}

function getPrice(itemId, quantity) {
    const item = priceList.find(item => item.itemid === itemId)
    if (!item) return null;

    const priceBracket = item.prices
        .sort((a, b) => b.qty - a.qty)
        .find(bracket => quantity >= bracket.qty)

    if (!priceBracket) return null;

    return (quantity * priceBracket.price)
}

export { setPriceList, getPrice };

const PriceList = {
    setPriceList,
    getPrice
};

export default PriceList;