/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {createStore} from "redux";
// import valueReducer from  "./redux/Values";
import {Provider} from "react-redux";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './pages/Cart';

import rootReducer from './redux/reducers';

const Stack = createStackNavigator();

const store = createStore(rootReducer)

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  }

const ReduxWrapper = ()=>{
    return(
        <NavigationContainer>
            <Provider store={store}>
                <MyStack />
                {/* <App /> */}
            </Provider>
        </NavigationContainer>
    )
}



AppRegistry.registerComponent(appName, () => ReduxWrapper);
