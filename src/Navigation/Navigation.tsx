import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Containers/Home/Home';
import Main from '../Containers/Main/Main';


console.disableYellowBox = true

const RootStack = createStackNavigator();

export interface Props {
}

export default class Navigator extends React.PureComponent<Props>  {
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator headerMode="none" initialRouteName="Main" >
                    <RootStack.Screen name="Home" component={Home} />
                    <RootStack.Screen name="Main" component={Main} />
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}
