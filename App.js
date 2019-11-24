import React, {PureComponent} from 'react';
import {View} from 'react-native';
import GlobalStyles from './src/constants/GlobalStyles';
import RootNavigator from './src/routes';

export default class App extends PureComponent{
  render(){
    return(
      <View style={GlobalStyles.container}>
        <RootNavigator/>
      </View>
    )
  }
}