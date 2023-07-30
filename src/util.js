export function getCurrency(currencyName) {
    switch (currencyName) {
        case 'USD':
            return [1,'$']
        case 'AZN':
            return [1.7,'₼']
        case 'TRY':
            return [26,' ₺']
        default:
            return [1,'$']
    }
}
