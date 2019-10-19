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

                {this.props.messages.map((ele,index) => {
                    if(ele[1] === 'sent') {
                        return(    
                            <View key = {index}  style = {styles.MessageLeft}>
                                <Text style = {{fontSize: 20, color: 'white'}}>{ele[0]}</Text>
                            </View>
                        );
                    }
                    else {
                        return (
                            <View key = {index}  style = {styles.MessageRight}>
                                <Text style = {{fontSize: 20, color: 'white'}}>{ele[0]}</Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
            </View>
        )
    }
}


export default MessageBox;

styles = StyleSheet.create({
    MessageLeft: {
        
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        borderWidth: 0.5,
        borderColor: '#317ae0',
        paddingLeft: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#317ae0',
        paddingTop: 10,
        paddingBottom: 6,

        
    },

    MessageRight: {
        flexDirection: 'row-reverse',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 5,
        borderWidth: 0.5,
        borderColor: '#31e054',
        paddingRight: 10,
        backgroundColor: '#31e054',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 10,
        paddingBottom: 6,      
        
    }
})