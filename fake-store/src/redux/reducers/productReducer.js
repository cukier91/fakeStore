import { ActionTypes } from "../const/action-types"

const initialState = {
    products: [{
        id: 1,
        titile: 'Book',
        price: 15,
        currency: 'EUR'
    }]
}

export const productReducer = (state=initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }

}