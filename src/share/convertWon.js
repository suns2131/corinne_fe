export function Won(money) {
    if(money === undefined && money === null)
        return 0;
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
