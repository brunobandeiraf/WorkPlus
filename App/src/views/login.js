import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import api from "../api";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = async () => {
    try {
      const authData = await api.post("/login", {
          email,
          password
      });
      if(authData.status === 200){
          navigation.navigate("Home");
      } else {
        alert(authData.data.message);
        setPassword('');
      }
    } catch (error) {
      alert("ERRO");
      setPassword('');
    };
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Work Plus</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Image style={styles.inputIcon} source={require("../assets/usuario.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <Image style={styles.inputIcon} source={require("../assets/Cadeado.png")} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}  
          onPress={onLoginPressed}>         
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.transparentButton]}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={[styles.buttonText, styles.transparentButtonText]}>Cadastre-se</Text>
          <Image style={styles.buttonIcon} source={require("../assets/duplaEngrenagem.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.transparentButton]}
          onPress={() => navigation.navigate("EsqueciSenha")}
        >
          <Text style={[styles.buttonText, styles.transparentButtonText]}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "50%",
    height: "25%",
    marginBottom: "5%",
  },
  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginBottom: "5%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginBottom: "2%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: "2%",
  },
  input: {
    flex: 1,
    height: 40,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: "2%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "2%",
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  transparentButton: {
    backgroundColor: "transparent",
  },
  transparentButtonText: {
    color: "blue",
  },
};

export default Login