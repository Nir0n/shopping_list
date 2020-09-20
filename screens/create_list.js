import React, { Fragment, Component } from 'react';
import { Button, Text, View, FlatList} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import * as Random from 'expo-random';

import ImageIdent from './camera';

import { styles } from '../styles.js';
// import { shoppingList } from '../data/shemas'
import { TextInput } from 'react-native-paper';

async function createUUID() {
  return await Random.getRandomBytesAsync(16);
}

// async function createItemUUID() {
//   return await Random.getRandomBytesAsync(32);
// }
function* createItemID(){
  let id=0;
  while (true){
    yield id;
    id+=1;
  }
}
// class Input extends Component {
//   constructor (props) {
//     super(props)
//     this.inputRef = null;
//   }
//   render () {
//     return (
//       <View style={styles.row}>
//         <Text>{this.props.name}</Text>
//         <TextInput
//           style={styles.input}
//           ref={(ref) => this.inputRef = ref}
//         />
//         {/* onSubmitEditing={() => this.nextInput.focus() } */}
//   </View>
//     )
//   }
// }

export default function CreateListScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Camera')} title="Camera" />
      ),
    });
  }, [navigation]);
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => navigation.navigate('ImageIdent')} title="Camera" />
  //     ),
  //   });
  // }, [navigation]);
  gen=createItemID()
  this.state = {
    id:createUUID().value,
    title:'',
    items:[
      // {
      //   key: gen.next().value.toString(),
      //   name: 'молоко',
      //   amount: '4',
      //   check: false,
      // },
      // {
      //   key: gen.next().value.toString(),
      //   name: 'вода',
      //   amount: "5",
      //   check: false,
      // },
      {
        key: gen.next().value.toString(),
      },
    ],
    groups:'',
    complete:false,
  };
  // create_new_cell = async() => {
  //   uuid = createUUID()
  //    new_cell = uuid:{
  //     title:'',
  //     items:,
  //     groups:'',
  //     complete:false,
  //   };
  // }
  function create_new_cell(){
      
  }
  save_sl = async () => {
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
  // read = async () => {
  //   try {
  //     const credentials = await SecureStore.getItemAsync('listOfSL');
  //     console.log('value of credentials: ', credentials);

  //     if (credentials) {
  //       const myJson = JSON.parse(credentials);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
    return (
    <Fragment>
      <TextInput
      label='title'
      value={state.title}
      onChangeText={value => this.setState({ value })}
      />
      {/* <FlatList
        data={this.state.items}
        renderItem={({ item }) => (
          <View
            style={styles.createList}>
            <View>
              <Text style={styles.createList}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      /> */}
      <FlatList
        data={this.state.items}
        renderItem={({ item }) => <TextInput
          value={item.name}
          onChangeText={value => this.setState({ value })}
        />}
        // keyExtractor={item => item.key}
      /> 
    </Fragment>
    );
  }