import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
/*
import LogoTitulo from './src/Componentes/LogoTitulo';
import Posts from './src/Componentes/Posts';
*/
export function paginaPrincipal(navegation) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.divLogo}>
          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          />
        </View>
        <View style={styles.divTitulo}>
          <Text style={styles.titulo}>WorkPlus</Text>
        </View>
      </View>
      <View style={styles.viewSubtitulo}>
        <Text style={styles.subtitulo}>Minhas Ofertas</Text>
      </View>
      <SafeAreaView style={styles.containerPosts}>
        <ScrollView>
          <View style={styles.post}>
            <View style={styles.viewFotoUsuario}>
              <View style={styles.fotoUsuario}>
              </View>
            </View>
            <View style={styles.viewDescricaoUm}>
              <Text style={styles.subtituloTipo}>Tipo de Serviço</Text>
              <Text style={styles.tipo}>Pintura</Text>

              <Text style={styles.subtituloPeriodo}>Periodo</Text>
              <Text style={styles.periodo}>Matutino</Text>

              <Text style={styles.subtituloRegiao}>Região</Text>
              <Text style={styles.regiao}>Florianópolis-SC</Text>
            </View>
            <View style={styles.viewDescricaoDois}>
              <Text style={styles.subtituloStatusServico}>Status do Serviço</Text>
              <Text style={styles.statusServico}>Ativo</Text>

              <Text style={styles.subtituloVisualizacoes}>Visualizações</Text>
              <Text style={styles.visualizacoes}>8 Visualizações</Text>

              <Text style={styles.subtituloDataPublicacao}>Publicação</Text>
              <Text style={styles.dataPublicacao}>01/08/2022</Text>

              <Text style={styles.historico}>Histórico</Text>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.viewFotoUsuario}>
              <View style={styles.fotoUsuario}>
              </View>
            </View>
            <View style={styles.viewDescricaoUm}>
              <Text style={styles.subtituloTipo}>Tipo de Serviço</Text>
              <Text style={styles.tipo}>Pintura</Text>

              <Text style={styles.subtituloPeriodo}>Periodo</Text>
              <Text style={styles.periodo}>Matutino</Text>

              <Text style={styles.subtituloRegiao}>Região</Text>
              <Text style={styles.regiao}>Florianópolis-SC</Text>
            </View>
            <View style={styles.viewDescricaoDois}>
              <Text style={styles.subtituloStatusServico}>Status do Serviço</Text>
              <Text style={styles.statusServico}>Ativo</Text>

              <Text style={styles.subtituloVisualizacoes}>Visualizações</Text>
              <Text style={styles.visualizacoes}>8 Visualizações</Text>

              <Text style={styles.subtituloDataPublicacao}>Publicação</Text>
              <Text style={styles.dataPublicacao}>01/08/2022</Text>

              <Text style={styles.historico}>Histórico</Text>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.viewFotoUsuario}>
              <View style={styles.fotoUsuario}>
              </View>
            </View>
            <View style={styles.viewDescricaoUm}>
              <Text style={styles.subtituloTipo}>Tipo de Serviço</Text>
              <Text style={styles.tipo}>Pintura</Text>

              <Text style={styles.subtituloPeriodo}>Periodo</Text>
              <Text style={styles.periodo}>Matutino</Text>

              <Text style={styles.subtituloRegiao}>Região</Text>
              <Text style={styles.regiao}>Florianópolis-SC</Text>
            </View>
            <View style={styles.viewDescricaoDois}>
              <Text style={styles.subtituloStatusServico}>Status do Serviço</Text>
              <Text style={styles.statusServico}>Ativo</Text>

              <Text style={styles.subtituloVisualizacoes}>Visualizações</Text>
              <Text style={styles.visualizacoes}>8 Visualizações</Text>

              <Text style={styles.subtituloDataPublicacao}>Publicação</Text>
              <Text style={styles.dataPublicacao}>01/08/2022</Text>

              <Text style={styles.historico}>Histórico</Text>
            </View>
          </View>

          <View style={styles.post}>
            <View style={styles.viewFotoUsuario}>
              <View style={styles.fotoUsuario}>
              </View>
            </View>
            <View style={styles.viewDescricaoUm}>
              <Text style={styles.subtituloTipo}>Tipo de Serviço</Text>
              <Text style={styles.tipo}>Pintura</Text>

              <Text style={styles.subtituloPeriodo}>Periodo</Text>
              <Text style={styles.periodo}>Matutino</Text>

              <Text style={styles.subtituloRegiao}>Região</Text>
              <Text style={styles.regiao}>Florianópolis-SC</Text>
            </View>
            <View style={styles.viewDescricaoDois}>
              <Text style={styles.subtituloStatusServico}>Status do Serviço</Text>
              <Text style={styles.statusServico}>Ativo</Text>

              <Text style={styles.subtituloVisualizacoes}>Visualizações</Text>
              <Text style={styles.visualizacoes}>8 Visualizações</Text>

              <Text style={styles.subtituloDataPublicacao}>Publicação</Text>
              <Text style={styles.dataPublicacao}>01/08/2022</Text>

              <Text style={styles.historico}>Histórico</Text>
            </View>
          </View>


          <View style={styles.viewCriarPosts}>

            <View style={styles.criarPosts}>

              <Image
                style={styles.mais}
                source={require("./assets/mais.png")}
              />

            </View>

          </View>

        </ScrollView>
      </SafeAreaView>
      <View style={styles.baixo}>
        <View style={styles.suasOfertas}>
          <TouchableOpacity
            onPress={() => navegation.navegate('minhasOfertas')}
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
            onPress={() => navegation.navegate('minhasPrestacoes')}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: "100%",
    width: "100%",
    backgroundColor: '#ffffff'
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: 145,
    width: "100%",
  },
  divLogo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "45%",
  },
  divTitulo: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "55%",
    height: "100%",
  },
  logo: {
    top: "12%",
    width: 95,
    height: 95,
    left: "10%",
  },

  titulo: {
    fontSize: 45,
    top: "14%",
    right: "10%",
  },
  viewSubtitulo: {
    height: "6%",
    width: "100%",

  },
  subtitulo: {
    fontSize: 30,
    left: "3%",
  },
  containerPosts: {
    paddingButton: 50,
    paddingTop: 10,
    marginLeft: 9,
    height: "69%",
    width: "100%",
    justifyContent: "center",

  },
  post: {
    flexDirection: "row",
    height: 121,
    width: "95%",
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#CEC566"
  },
  viewFotoUsuario: {
    flex: 1.5,
  },
  viewDescricaoUm: {
    flex: 2,

  },
  viewDescricaoDois: {
    flex: 2,
  },
  fotoUsuario: {
    position: 'relative',
    left: '5%',
    top: '20%',
    width: 70,
    height: 83,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    zIndex: 1
  },
  subtituloTipo: {
    fontSize: 15,
    position: 'absolute',
    top: '8%',
    //left:'27%',
    fontWeight: 'bold'
  },
  subtituloPeriodo: {
    fontSize: 15,
    position: 'absolute',
    top: '35%',
    //left:'27%',
    fontWeight: 'bold'
  },
  subtituloRegiao: {
    fontSize: 15,
    position: 'absolute',
    top: '63%',
    //left:'27%',
    fontWeight: 'bold'
  },
  subtituloStatusServico: {
    fontSize: 15,
    position: 'absolute',
    top: '8%',
    //left: '62%',
    fontWeight: 'bold'
  },
  subtituloVisualizacoes: {
    fontSize: 15,
    position: 'absolute',
    top: '35%',
    //left: '62%',
    fontWeight: 'bold'
  },
  subtituloDataPublicacao: {
    fontSize: 15,
    position: 'absolute',
    top: '63%',
    //right: '1%',
    fontWeight: 'bold'
  },
  tipo: {
    fontSize: 13,
    position: 'absolute',
    top: '19%',
    //left: '27%'
  },
  periodo: {
    fontSize: 13,
    position: 'absolute',
    top: '46%',
    //left: '27%'
  },
  regiao: {
    fontSize: 13,
    position: 'absolute',
    top: '75%',
    //left: '27%'
  },
  statusServico: {
    fontSize: 13,
    position: 'absolute',
    top: '19%',
    //left: '62%'
  },
  visualizacoes: {
    fontSize: 13,
    position: 'absolute',
    top: '46%',
    //left: '62%'
  },
  dataPublicacao: {
    fontSize: 13,
    position: 'absolute',
    top: '75%',
    //left: '62%'
  },
  historico: {
    fontSize: 13,
    position: 'absolute',
    top: '85%',
    left: '50%'
  },
  viewCriarPosts: {
    flexDirection: "row",
    height: 37,
    width: "12%",
    left: "3%",
    //backgroundColor: "black"

  },
  criarPosts: {
    width: "100%",
    height: "100%",
  },
  mais: {
    width: "100%",
    height: "100%",
  },
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