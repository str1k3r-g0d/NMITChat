import React from 'react';
import { KeyboardAvoidingView, ScrollView ,StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import TextArea from './components/TextArea/TextArea';
import MessageBox from './components/messagebox/messagebox';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      text: '',
      messages: [],
      type: ''

    }
  }
  

  onPress = (event) => {
      this.setState({
        text: event
      })
  }

  componentDidMount() {
    const socket = io.connect('https://frozen-peak-23350.herokuapp.com');

    socket.on('NMIT', data => { 
      const message = [...this.state.messages];
      message.push([data.message,'recieved'])
      this.setState({
        messages: message,
        type: 'recieved'
      })
    
    });
  }
  

  send = () => {
    
    socket.emit('NMIT', { message: this.state.text })
  }


  onSubmitHandler = () => {
    const message = [...this.state.messages];
    message.push([this.state.text,'sent'])
    this.setState({
      messages: message,
      type: 'sent'
    })

    this.setState({
      text: '',
    })
  }

  

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior = "padding">
        <View style={styles.ChatArea}>
          <MessageBox messages = {this.state.messages} type = {this.state.type} />
          
        </View>
        <View style={styles.TextArea}>
          <TextArea value = {this.state.text} onPressHandler = {this.onPress} onSubmitHandler = {this.onSubmitHandler} />
        </View>
      </KeyboardAvoidingView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  TextArea: {
    marginLeft: 5,
    marginRight: 5,
  },

  ChatArea: {
    flex: 1,
    flexDirection: 'column-reverse',

  }
});

export default App;
