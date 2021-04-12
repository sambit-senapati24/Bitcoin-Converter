export const changeToCurrency = (currencyType) => {
    return {
        type : 'MODIFYCURRENCY',
        payload: currencyType,
    }
}