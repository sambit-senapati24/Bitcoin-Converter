const currencyReducer = (state = {currencyType : 'USD'}, action) => {
    switch(action.type) {
        case 'MODITYCURRENCY' :
            return {...state, currencyType : action.payload};
        default :
            return state;
    }
}

export default currencyReducer;