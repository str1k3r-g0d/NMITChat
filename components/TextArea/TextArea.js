import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

const TextArea = ({onPressHandler, onSubmitHandler}) => (
    <View style = {styles.TextArea}>
        <TextInput placeholder = " Type your message." onChangeText = {onPressHandler} style = {styles.TextAreaBox} />
        <Button title = 'send ' style = {{marginRight: 2}} onPress = {onSubmitHandler} />
    </View>
)   
    


        
            




const styles = StyleSheet.create({

    TextArea: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        marginBottom: 10,
        borderRadius: 15,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },

    TextAreaBox: {
        backgroundColor: '#f5f3f2',
        width: '85%',borderRadius: 15
    }

});

export default TextArea;
  
