import React from 'react';
import { Button, Text, View, FlatList} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { styles } from '../styles.js';
import { shoppingList } from '../data/shemas'

export default function ShoppingListsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Create List')} title="Create List" />
      ),
    });
  }, [navigation]);
  
  read = async () => {
    try {
      const sl = await SecureStore.getItemAsync('listOfSL');
      console.log('list of sl: ', sl);

      if (sl) {
        const myJson = JSON.parse(sl);
        this.setState({
          listTitle: myJson.listTitle,
          compliete: myJson.compliete
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  
    return (
      <FlatList>
        data={}
        renderItem={({ item }) => (
          <View style={styles.shoppingLists}>
            <Text>{item.listTitle}</Text>
            <Text>{item.compliete}</Text>
            <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
            />
          </View>
        )}
      </FlatList>
    );
  }