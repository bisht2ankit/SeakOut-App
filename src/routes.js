import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';


import {
    HomeScreen
} from './screens';

const RootNavigator = createStackNavigator({
    home: HomeScreen
})

export default createAppContainer(RootNavigator);