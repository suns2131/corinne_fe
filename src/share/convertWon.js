export function Won(money) {
    // console.log(typeof(money));
    const ins = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return ins
}
