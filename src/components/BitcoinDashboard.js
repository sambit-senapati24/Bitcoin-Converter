import React from 'react'
import SelectCurrency from './bitcoinSection/SelectCurrency'

function BitcoinDashboard({ currencyType, setCurrencyType }) {
    return (
        <div className='bitCoinDashboard'>
            <p>1 Bitcoin Equals</p>
            <br />
            <SelectCurrency currencyType={currencyType} setCurrencyType={setCurrencyType} />
        </div>
    )
}

export default BitcoinDashboard
