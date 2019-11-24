import React, {PureComponent} from 'react';
import {View} from 'react-native';
import { SlideShow } from '../../components/cards';

export class HomeScreen extends PureComponent {
    render(){
        return(
            <View>
                <SlideShow/>
            </View>
        )
    }
}