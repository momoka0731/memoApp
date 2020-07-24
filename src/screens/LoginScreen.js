import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';



class LoginScreen extends React.Component {
  state = {
    email: 'userone@gmail.com',
    password: 'password',
  }
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((authResult) => {
      console.log('success', authResult.user.uid);
      this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log('error', error);
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput 
          style={styles.input} 
          value={this.props.email} 
          onChangeText={(text) => { this.setState({ email: text }); }} 
          autoCapitalize="none" 
          autoCorrect={false} 
          placeholder="Email Address"
        />
        <TextInput 
          style={styles.input} 
          value={this.props.password} 
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none" 
          autoCorrect={false} 
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,

  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',

  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  }
  
});

export default LoginScreen;