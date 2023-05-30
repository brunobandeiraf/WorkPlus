import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Cadastro({ navigation }) {
  const [name, setName] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const onRegisterPressed = async () => {
    
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
    } else {
        try {
          const data = await api.post("/user/cadastro", {
            name,
            nameUser,
            cpf,
            email,
            password
          });
          if(data.status === 200){
            console.log(data);
            alert(data.data.message);
            navigation.navigate("Login")
          } else {
            console.log(data);
          };
        } catch (error) {
          console.log(error)
        };
      };
    }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.viewImage}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.viewTextoWorkPlus}>
          <Text style={{ fontSize: 50 }}>Work Plus</Text>
        </View>
      </View>
      <View style={styles.viewInput}>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Nome Completo"
            value={name}
            onChangeText={setName}
          />
          <Image style={styles.inputLogo} source={require('../assets/usuario.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Nome de usuário"
            value={nameUser}
            setValue={setNameUser}
          />
          <Image style={styles.inputLogo} source={require('../assets/usuario.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="CPF"
            value={cpf}
            setValue={setCpf}
          />
          <Image style={styles.inputLogo} source={require('../assets/usuario.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="E-mail"
            value={email}
            setValue={setEmail}
          />
          <Image style={styles.inputLogo} source={require('../assets/Carta.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Senha"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Image style={styles.inputLogo} source={require('../assets/Cadeado.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <Image style={styles.inputLogo} source={require('../assets/Cadeado.png')} />
        </View>

      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.viewCadatrar}>
          <TouchableOpacity 
            style={styles.buttonCadastrar} 
            onPress={onRegisterPressed}
          >
            <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
            <Image style={styles.buttonIcon} 
              source={require('../assets/logo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewLogin}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: "100%",
  },
  topo: {
    width: "100%",
    height: "20%",
  },
  viewInput: {
    width: "100%",
    height: "50%",
    paddingTop: "6%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
  },
  viewImage: {
    width: "100%",
    height: "60%",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  viewTextoWorkPlus: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "6%",
    height: "10%",
    width: "85%",
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
  },
  inputField: {
    flex: 1,
  },
  inputLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  viewCadatrar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "50%",
    height: "30%",
    marginTop: 20,
  },
  buttonTextCadastrar: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 10,
  },
  viewLogin: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    height: "30%",
    marginTop: 20,
  },
  buttonTextLogin: {
    color: "blue",
    fontSize: 16,
    textAlign: "center",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
    width: "20%",
    height: "100%",
  },
  buttonCadastrar: {
    width: "100%",
    height: "100%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
