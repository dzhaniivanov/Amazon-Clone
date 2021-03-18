export const initialState = {
    basket: [],
    loggedinuser: null,

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log('there were err while removing');
            }
            return { ...state, basket: newCart }
    }
}

export default reducer;