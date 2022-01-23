export const initialState = {
  cart: [],
  user: null
};

//Selector
export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => amount + item.price, 0);
     

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
      case "ADD_TO_CART":
          return{
              ...state,
              cart: [...state.cart, action.item],
          };
      case "REMOVE_FROM_CART":
        const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
        let newCart = [...state.cart];
        if(index >= 0)
        {
          newCart.splice(index,1);
        }

        else
        {
            console.warn("Can't Remove, as cart is empty");
        }
        return{
          ...state,
          cart: newCart
        }
      case "SET_USER":
          return{
            ...state,
            user: action.user
          }

        default:
          return state;
  }

};

export default reducer;
// the use of Reduse() function 
//types:
// 1)Accumulator
// 2)CurrentuseDebugValue
// 3)index
// 4)InitialValue

