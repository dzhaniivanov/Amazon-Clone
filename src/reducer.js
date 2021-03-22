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
                console.warn(`Can't remove product (id: ${action.id}) as its not in the basket!`);
            }
            return { ...state, basket: newCart }

        default:
            return state;
    }
}

export default reducer;