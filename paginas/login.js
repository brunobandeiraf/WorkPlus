import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Adicionar lógica de login de usuário aqui
    console.log("Login pressed");
  };

  const handleForgotPassword = () => {
    // Adicionar lógica de recuperação de senha aqui
    setShowForgotPassword(true);
  };

  const handleResetPassword = () => {
    // Adicionar lógica de reset de senha aqui
    setShowForgotPassword(false);
  };

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />

      <Text style={{ fontSize: 50 }}>Work Plus</Text>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {showForgotPassword ? (
          <View style={styles.viewInputEmail}>
            <Text style={{ marginTop: 20 }}>Insira seu e-mail abaixo:</Text>

            <TextInput
              style={styles.inputEmail}
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TouchableOpacity
              style={styles.buttonResetPassword}
              onPress={handleResetPassword}
            >
              <Text style={styles.buttonText}>Resetar senha</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>

            <View style={styles.viewButton}>
              <View style={styles.imgButton}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image
                    style={{ width: 100, height: 40, alignItems: "center"}}
                    source={require("../assets/BotaoEntrar.png")}
                  />
                </TouchableOpacity>
                
              </View>
            </View>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={{ color: "blue", textDecorationLine: "underline" }}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",

  },
  input: {
    height: 45,
    width: '80%',
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  viewButton: {
    height: "40%",
    width: "10%",
    backgroundColor: "red",
    marginTop: 20,
  },
  imgButton: {
    height: "40%",
    width: "10%",
    backgroundColor:'black'
  },
  buttonTextCadastro: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignItems: "center"
  },
  logo: {
    width: '40%',
    height: '20%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  engrenagem: {
    width: '20%',
    height: '90%',
  },
  inputEmail:{
    height: 45,
    width: '80%',
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  viewInputEmail:{
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonResetPassword:{
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '45%',
  }
});