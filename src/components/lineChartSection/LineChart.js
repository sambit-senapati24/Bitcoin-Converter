import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({ currencyType, setCurrencyType, daysToSubtract }) {
    const [minValue, setMinValue] = useState(null);
    const [month, setMonth] = useState({
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    })
    //to adjust date
    let sysdate = new Date()
    let currYear = sysdate.getFullYear()
    let currMonth = (sysdate.getMonth() + 1 < 10) ? '0' + (sysdate.getMonth() + 1) : (sysdate.getMonth() + 1)
    let currDate = (sysdate.getDate() + 1 < 10) ? '0' + (sysdate.getDate() + 1) : (sysdate.getDate() + 1)
    let startDate = `${currYear}-${currMonth}-${currDate}`
    //to subtract 60 days 
    let dateAfterSubtract = new Date()
    dateAfterSubtract.setDate(dateAfterSubtract.getDate() - daysToSubtract)
    let prevYear = dateAfterSubtract.getFullYear()
    let prevMonth = (dateAfterSubtract.getMonth() + 1 < 10) ? '0' + (dateAfterSubtract.getMonth() + 1) : (dateAfterSubtract.getMonth() + 1)
    let prevDate = (dateAfterSubtract.getDate() + 1 < 10) ? '0' + (dateAfterSubtract.getDate() + 1) : (dateAfterSubtract.getDate() + 1)
    let endDate = `${prevYear}-${prevMonth}-${prevDate}`
    //for 15 days
    let dateBefore15Days = new Date()
    dateBefore15Days.setDate(dateBefore15Days.getDate() - 15)
    let monthBefore15Days = (dateBefore15Days.getMonth() + 1 < 10) ? '0' + (dateBefore15Days.getMonth() + 1) : (dateBefore15Days.getMonth() + 1)
    let datePrior15Days = (dateBefore15Days.getDate() + 1 < 10) ? '0' + (dateBefore15Days.getDate() + 1) : (dateBefore15Days.getDate() + 1)


    useEffect(async () => {
        let response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currencyType}&start=${endDate}&end=${startDate}`);
        let responseJson = await response.json();
        let obj = responseJson.bpi;
        let objArray = Object.values(obj);
        let minBitcoinValue = Math.min(...objArray)
        setMinValue(minBitcoinValue)
    }, [currencyType])

    return (
        <div className='lineChart'>
            <Line data={{
                labels: [`${prevDate} ${month[`${prevMonth}`]}`, `${datePrior15Days} ${month[`${monthBefore15Days}`]}`, `${currDate} ${month[`${currMonth}`]}`],
                datasets: [{
                    label: `BitCoin pricing over ${daysToSubtract} days`,
                    data: [minValue, minValue + 5000, minValue + 10000],
                    backgroundColor: [
                        'rgb(152,251,152)',
                    ],
                    borderColor: [
                        'rgb(0,128,0)',
                    ]

                }],

            }}
                height={225}
            />
        </div>
    )
}

export default LineChart;
