import React, { Fragment } from 'react';
import { Text, View, FlatList} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import * as Random from 'expo-random';

import { styles } from '../styles.js';
// import { shoppingList } from '../data/shemas'
import { TextInput } from 'react-native-paper';

async function createUUID() {
  return await Random.getRandomBytesAsync(16);
}

export default function CreateListScreen() {
  state = {
    id:createUUID(),
    title:'',
    items:'',
    groups:'',
    complete:false,
  };
  save_sl = async () => {
    const { title, items, groups, complete } = this.state;
    const list_details = { title, items, groups, complete };
    list_details = this.state;
    try {
      await SecureStore.setItemAsync(
        "listOfSL",
        JSON.stringify(list_details)
      );
      // this.setState({title: '', items: '', groups: '', complete: '' });
    } catch (e) {
      console.log(e);
    }
  };
    return (
    <Fragment>
      {/* <TextInput
      label='title'
      value={state.title}
      onChangeText={title => this.setState({ title })}
      /> */}
      <FlatList
        data={items}
        renderItem={({ items }) => (
          <View
            style={styles.createList}>
            <View>
              <Text style={styles.createList}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </Fragment>
    );
  }