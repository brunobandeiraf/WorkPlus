import React,{useState} from 'react';
import { Text, View, StyleSheet,Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
/*
import LogoTitulo from './src/Componentes/LogoTitulo';
import Posts from './src/Componentes/Posts';
*/
export  function componenteBaixo() {
  const [text, setText] = useState('');
  return (

    <View style={styles.baixo}>
    <View style={styles.suasOfertas}>
      <TouchableOpacity
        onPress={() => console.log("Custom button pressed")}
      >
        <Text style={styles.botaoSuasOfertas}>Suas Ofertas</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.casinha}>
      <Image
        style={styles.iconeCasinha}
        source={require("./assets/casinha.png")}
      />
    </View>
    <View style={styles.suasDemandas}>
      <TouchableOpacity
        onPress={() => console.log("Custom button pressed")}
      >
        <Text style={styles.botaoSuasPrestacoes}>Suas Prestações</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.usuarioBaixo}>
      <Image
        style={styles.iconeUsuario}
        source={require("./assets/usuario.png")}
      />
    </View>
  </View> 

    );
}

const styles = StyleSheet.create({

    baixo: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#A5C4FF",
      },
      suasOfertas: {
        height: "100%",
        width: "34%",
        justifyContent: "center",
        alignItems: "center",
      },
      casinha: {
        paddingRight: "2%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "15%",
      },
      suasDemandas: {
        height: "100%",
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
      },
      usuarioBaixo: {
        height: "100%",
        width: "16%",
        justifyContent: "center",
        alignItems: "center",
      },
      botaoSuasPrestacoes: {
        width: "100%",
        fontSize: 16.5,
        borderRadius: 12,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 14,
        borderBottomColor: "#1A397B",
        borderBottomWidth: 2,
        backgroundGradient: {
          colors: ["black", "#ffffff"],
          start: { x: 1, y: 2 },
          end: { x: 1, y: 1 },
        },
      },
      iconeCasinha: {
        height: "73%",
        width: "70%",
      },
      botaoSuasOfertas: {
        width: "100%",
        fontSize: 16,
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
      iconeUsuario: {
        height: "82%",
        width: "70%",
      },
});