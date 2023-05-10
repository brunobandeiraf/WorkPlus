import React,{useState} from 'react';
import "expo-router/entry";
import { Text, View, StyleSheet,Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, ViewComponent} from 'react-native';
import Constants from 'expo-constants';
import { Button, Input, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import minhasOfertas from './src/views/minhasOfertas';
import minhasPrestacoes from './src/views/minhasPrestacoes';
import { paginaPrincipal } from './src/views/paginaPrincipal';

const Stack = createStackNavigator();

export default function MyStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="minhasOfertas" component={minhasOfertas} />
      <Stack.Screen name="Principal" component={minhasPrestacoes} />
      <Stack.Screen name="PaginaPrincipal" component={paginaPrincipal} />
    </Stack.Navigator>
  );
}
