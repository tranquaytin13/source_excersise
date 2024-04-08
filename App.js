import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`USERNAME: ${username}, PASSWORD: ${password}`)
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/anh.png')} style={{height:500, width:1190}} />
      <Text style={styles.registerText} >REGISTER</Text>
      <TextInput
        style={styles.input}
        placeholder="USERNAME"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:1200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#269356',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: '#867700',
    color: "#645400"
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: '#bc6657',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    alignSelf:'flex-end',
    marginRight:145,
    color: '#fff',
    marginBottom: 5,
    marginTop:5
  },
});

export default LoginScreen;