import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class MessageBox extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View >
            <ScrollView>

                {this.props.messages.map((ele,index) => (
                    <View key = {index}  style = {styles.Message}>
                        <Text style = {{fontSize: 20}}>{ele}</Text>
                    </View>
                ))}
            </ScrollView>
            </View>
        )
    }
}


export default MessageBox;

styles = StyleSheet.create({
    Message: {
        marginBottom: 5,
        width: 300,
        borderWidth: 0.5,
        borderColor: 'blue',
        paddingLeft: 10
        
        
    }
})