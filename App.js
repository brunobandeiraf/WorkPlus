import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/views/login';
import Cadastro from './src/views/cadastro';
import EsqueciSenha from './src/views/ForgotPasswordScreen';
import Home from './src/views/Home';
import TelaRecomendacao from './src/views/TelaRecomendacao';
import Servico from './src/views/Servico';
import TelaCriarServico from './src/views/TelaCriarServico';
import Trabalho from './src/views/Trabalho';
import TelaCriarTrabalho from './src/views/TelaCriarTrabalho';
import Perfil from './src/views/Perfil';
import EditarPerfil from './src/views/EditarPerfil';
import TelaPremium from './src/views/TelaPremium';

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
