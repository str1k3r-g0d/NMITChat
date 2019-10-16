import React from 'react';
import { KeyboardAvoidingView, FlatList ,StyleSheet, Text, View } from 'react-native';
import TextArea from './components/TextArea/TextArea';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior = "padding">
      <View style={styles.chatarea}>

        <TextArea/>
      </View>
    </KeyboardAvoidingView>
  );
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
