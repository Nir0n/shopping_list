import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, TouchableOpacity, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Contacts from 'expo-contacts';
import ShoppingListsScreen from './screens/shopping_lists';
import DetailsScreen from './screens/details';
import CreateListScreen from './screens/create_list';
import ImageIdent from './screens/camera';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shopping Lists" component={ShoppingListsScreen} />
        <Stack.Screen name="Create List" component={CreateListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Camera" component={ImageIdent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


