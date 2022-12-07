const product = (proObj) =>{
    return{
        type:'ADD_PRODUCT',
        payload:proObj,
    }
}

const GetNumberCart = () =>{
    return{
        type:'GET_NUMBER_CART'
    }
}

const IncreaseQuantity = (payload) =>{
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
const DecreaseQuantity = (payload) =>{
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}
const DeleteCart = (payload) =>{
    return{
        type:'DELETE_CART',
        payload
    }
}
export default{
    product,
    GetNumberCart,
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteCart,
}