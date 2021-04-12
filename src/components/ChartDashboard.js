import React from 'react'
import LineChart from './lineChartSection/LineChart'
function ChartDashboard({currencyType, setCurrencyType}) {
    return (
        <div className='chartDashboard'>
            <p>Last 60 Days trend</p>
            <LineChart currencyType = {currencyType} setCurrencyType = {setCurrencyType} daysToSubtract = {60} />
        </div>
    )
}

export default ChartDashboard
