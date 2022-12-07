import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../redux/actions';

export default Cart = () => {
  const currentState = useSelector(state => state.CurrentProduct);
  const dispatch = useDispatch();
  console.log(currentState.Carts);
  return (
    <View style={style.mainContainer}>
      {currentState.Cart == 0 ? (
        <View style={style.mainContainer}>
          <Text>Cart empty</Text>
        </View>
      ) : (
        <View style={style.mainContainer}>
          {currentState.Carts.map(item => {
            return (
              <View style={style.productContainer}>
                <Image
                  style={style.image}
                  source={require('../assets/pixel.jpg')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={{fontSize: 18, color: '#000000'}}>
                    {item.name}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <TouchableHighlight
                      onPress={() =>
                        dispatch(
                          allActions.ProductActions.DecreaseQuantity(item),
                        )
                      }
                      style={style.smallBtn}>
                      <Text style={{color: '#ffffff'}}>-</Text>
                    </TouchableHighlight>
                    <Text
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        justifyContent: 'center',
                        fontSize: 20,
                        color: '#000000',
                      }}>
                      {item.quantity}
                    </Text>
                    <TouchableHighlight
                      onPress={() =>
                        dispatch(
                          allActions.ProductActions.IncreaseQuantity(item),
                        )
                      }
                      style={style.smallBtn}>
                      <Text style={{color: '#ffffff'}}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() =>
                        dispatch(allActions.ProductActions.DeleteCart(item))
                      }>
                      <Text>Delete</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  productContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 10,
    borderRadius: 5,
  },
  smallBtn: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
