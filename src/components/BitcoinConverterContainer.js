import React, { useState } from 'react'
import BitcoinDashboard from './BitcoinDashboard'
import ChartDashboard from './ChartDashboard'


function BitcoinConverterContainer() {
    const [currencyType, setCurrencyType] = useState('USD')

    return (
        <>
            <BitcoinDashboard currencyType={currencyType} setCurrencyType={setCurrencyType} />
            <ChartDashboard currencyType={currencyType} setCurrencyType={setCurrencyType} />
        </>
    )
}

export default BitcoinConverterContainer
