import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }
  handlePress() {
    
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    

    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then(() => {
      this.props.navigation.goBack();
      
    })
    .catch(() => {
     
    });
  }
  render() {
    return (
      <View style={styles.container}>

        <TextInput 
          style={styles.memoEditInput} 
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }} 
          textAlignVertical="top"
        />
          
        
        <CircleButton name="check" onPress={this.handlePress.bind(this)} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 36,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;