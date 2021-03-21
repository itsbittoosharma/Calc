import React from 'react';
import {View, Text} from 'react-native';
import {CalcButton} from './../components/CalcButton'
export default class CalculatorScreen extends React.Component {
    render()
    {
        return(
            <View style={{paddingTop:50}}>
                <Text>Calculator Screen</Text>
                <CalcButton title="+" color="red" backgroundColor="yellow"/>
            </View>
        );
    }
}