import React, { useState, useEffect } from 'react'
import DisplayCurrencyValue from './DisplayCurrencyValue'


function SelectCurrency({ currencyType, setCurrencyType }) {
    //const [globalCurrency, setGlobalCurrency] = useState(null);
    const [currency, setCurrency] = useState(null);
    useEffect(async () => {
        let bitcoinData = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        let bitcoinDataJson = await bitcoinData.json();
        //setGlobalCurrency(bitcoinDataJson.bpi);
        setCurrency(bitcoinDataJson.bpi[`${currencyType}`]);
    }, [currencyType])
    const changeCurrency = (e) => {
        let curr = e.target.value
        setCurrencyType(curr)
    }

    return (
        <>
            <select onChange={changeCurrency}>
                <option value='USD'>United States Dollar (USD)</option>
                <option value="GBP">British Pound Sterling (GBP)</option>
                <option value='EUR'>Euro (EUR)</option>
            </select>
            <DisplayCurrencyValue currency={currency} />
        </>
    )
}

export default SelectCurrency
