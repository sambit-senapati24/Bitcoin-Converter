import React from 'react'

function DisplayCurrencyValue(props) {
    return (
        <>
            {props.currency ? <h2>{props.currency.rate}  {props.currency.description}</h2> : ''}
        </>
    )
}

export default DisplayCurrencyValue
