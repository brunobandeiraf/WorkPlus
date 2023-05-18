import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './paginas/Home';
import Servico from './paginas/Servico';
import Trabalho from './paginas/Trabalho';
import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import EsqueciSenha from './paginas/ForgotPasswordScreen';
const Stack = createStackNavigator()


export default function App(){
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}} />
      <Stack.Screen name="Esqueci Senha" component={EsqueciSenha} options={{ headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="Servico" component={Servico} options={{ headerShown: false}} />
      <Stack.Screen name="Trabalho" component={Trabalho} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
)}
