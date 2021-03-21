import React from 'react';
import { Stylesheet, View, Text, TouchableOpacity} from 'react-native';
export default class CalcButton extends React.Component {
    static defaultProps = {
        onPress: function() {},
        title:"",
        color: "white",
        backgroundColor: "white",
    }
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} >
                <Text style={Styles.text}>dsff</Text>
            </TouchableOpacity>
        );
    }
}
