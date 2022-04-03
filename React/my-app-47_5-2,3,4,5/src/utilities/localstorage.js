const localStorageData = (price) => {
    const quantity = localStorage.getItem(price);
    if (quantity) {
        console.log('already exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(price, newQuantity);
    }
    else {
        console.log('new item')
        localStorage.setItem(price, 1)
    }

}

export { localStorageData };