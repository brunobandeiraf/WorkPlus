import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para autenticar o usuário com o email e senha
    // Você pode adicionar sua lógica aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Work Plus</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Image
          style={styles.inputIcon}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Image
          style={styles.inputIcon}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/logo.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.transparentButton]}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={[styles.buttonText, styles.transparentButtonText]}>Cadastre-se</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/logo.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.transparentButton]}
          onPress={() => navigation.navigate('EsqueciSenha')}
        >
          <Text style={[styles.buttonText, styles.transparentButtonText]}>Esqueci minha senha</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../assets/logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '80%',
    height: '35%',
    marginBottom: '5%',
  },
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    marginBottom: '5%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: '2%',
  },
  inputIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -10,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: '2%',
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'blue',
  },
  transparentButtonText: {
    color: 'blue',
  },
};

export default LoginScreen;
