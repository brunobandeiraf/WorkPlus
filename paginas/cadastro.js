import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Cadastro({navigation}) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
    } else {
      // Adicionar lógica de cadastro de usuário aqui
    }
  };

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

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.buttonContainer}>

        <View style={styles.viewCadatrar}>
          <TouchableOpacity
            style={styles.buttonCadastrar}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
            <Image
              style={styles.engrenagem}
              source={require('../assets/engrenagem.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewLogin}>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonTextLogin}>Login</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
    height: '100%',
  },
  topo: {
    width: "100%",
    height: '20%',
  },
  viewInput: {
    width: "100%",
    height: '60%',
    paddingTop: '6%',
    width: "100%",
    height: '50%',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: '20%',
  },
  viewImage: {
    width: "100%",
    height: '60%',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  viewTextoWorkPlus: { 
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: '40%',
  },
  input: {
    marginBottom: '6%',
    height: "10%",
    width: "85%",
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    borderBottomColor: "#1A397B",
    borderBottomWidth: 2,
    backgroundGradient: {
      colors: ["black", "#ffffff"],
      start: { x: 1, y: 2 },
      end: { x: 1, y: 1 },
    },
  },
  viewCadatrar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    width: "50%",
    height: '30%',
    marginTop: 20,
  },
  buttonTextCadastrar: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  engrenagem: {
    marginLeft: '8%',
    width: '23%',
    height: '100%',
  },
  viewLogin: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    width: "50%",
    height: '30%',
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
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    width: "20%",
    height: '100%',
  },
  buttonCadastrar: {
    width: "100%",
    height: '100%',
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
});


