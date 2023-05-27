import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import EsqueciSenha from './paginas/ForgotPasswordScreen';
import Home from './paginas/Home';
import TelaRecomendacao from './paginas/TelaRecomendacao';
import Servico from './paginas/Servico';
import TelaCriarServico from './paginas/TelaCriarServico';
import Trabalho from './paginas/Trabalho';
import TelaCriarTrabalho from './paginas/TelaCriarTrabalho';
import Perfil from './paginas/Perfil';
import EditarPerfil from './paginas/EditarPerfil';
import TelaPremium from './paginas/TelaPremium';

const Stack = createStackNavigator()

export default function App(){
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="TelaRecomendacao" component={TelaRecomendacao} options={{ headerShown: false}} />
      <Stack.Screen name="Servico" component={Servico} options={{ headerShown: false}} />
      <Stack.Screen name="TelaCriarServico" component={TelaCriarServico} options={{ headerShown: false}} />
      <Stack.Screen name="Trabalho" component={Trabalho} options={{ headerShown: false}} />
      <Stack.Screen name="TelaCriarTrabalho" component={TelaCriarTrabalho} options={{ headerShown: false}} />
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false}} />
      <Stack.Screen name="TelaPremium" component={TelaPremium} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
)}
