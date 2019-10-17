import React from 'react';
import { KeyboardAvoidingView, FlatList ,StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import TextArea from './components/TextArea/TextArea';

var arr = [];
var socket = io.connect('https://frozen-peak-23350.herokuapp.com');

socket.on('NMIT', function (data) {
  console.log("Received: " ,data.message);

});

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      text: '',
    }
  }
  

  onPress = (event) => {
      this.setState({
        text: event
      })
  }

  send = () => {
    
    socket.emit('NMIT', { message: this.state.text })
  }

  onSubmitHandler = () => {
    this.send();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior = "padding">
        <View style={styles.chatarea}>
          <TextArea onPressHandler = {this.onPress} onSubmitHandler = {this.onSubmitHandler} />
        </View>
      </KeyboardAvoidingView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  chatarea: {
    marginLeft: 5,
    marginRight: 5,
  }
});

export default App;
