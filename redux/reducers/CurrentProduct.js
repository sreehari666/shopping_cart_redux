const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

const CurrentProduct = (state = initProduct, action) => {
  switch (action.type) {
    case 'GET_NUMBER_CART':
      return {
        ...state,
      };
    case 'ADD_PRODUCT':
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case 'INCREASE_QUANTITY':
      state.numberCart++;
      state.Carts.find(item => {
        if (item.id == action.payload.id) {
          item.quantity++;
        }
      });

      return {
        ...state,
      };
    case 'DECREASE_QUANTITY':
      state.Carts.find(item => {
        if (item.id == action.payload.id) {
          if (item.quantity > 1) {
            state.numberCart--;
            item.quantity--;
          }
        }
      });
      return {
        ...state,
      };
    case 'DELETE_CART':
      let quantity_;
      state.Carts.find(item =>{
        if(item.id == action.payload.id){
            quantity_ = item.quantity
        }
      })
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
            console.log(item.id)
          return item.id != quantity_
        }),
      };
    default:
      return state;
  }
};

export default CurrentProduct;
