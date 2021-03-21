import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
export default class App extends React.Component {
  render(){return (

<View style={{paddingTop:50, flex:1}}>

    <TouchableOpacity onPress={this.props.onPress} style={{flex:1, flexDirection:'column',height:75, width:75, alignItems:'center', backgroundColor:'red'}}>
                <Text style={{fontSize:50,}}>R</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPress} style={{flex:1, flexDirection:'column',height:75, width:75, alignItems:'center', backgroundColor:'blue'}}>
                <Text style={{fontSize:50,}}>b</Text>
            </TouchableOpacity>
            </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
