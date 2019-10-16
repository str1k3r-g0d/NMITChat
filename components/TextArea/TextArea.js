import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const TextArea = () => (

    <View style = {styles.TextAreaBox}>
        <TextInput placeholder = " Type your message."/>
    </View>

);

const styles = StyleSheet.create({

    TextAreaBox: {
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        marginBottom: 20,
        borderRadius: 15,
        textAlign: 'center',
        
    }

});

export default TextArea;
  
