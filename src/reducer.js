export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
      cart.reduce((Amount))


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
      case "ADD_TO_CART":
          return{
              ...state,
              cart: [...state.cart, action.item],
          };
      default:
          return state;
  }

};

export default reducer;