import React, { Fragment, Component } from 'react';
import { Button, Text, View, FlatList} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import * as Random from 'expo-random';

import ImageIdent from './camera';

import { styles } from '../styles.js';
import { TextInput } from 'react-native-paper';

function* createItemID(){
  let id=0;
  while (true){
    yield id;
    id+=1;
  }
}

async function createUUID() {
  return await Random.getRandomBytesAsync(16);
}

class IputTextField extends React.Component{
  render(){
    return(
      <TextInput
      label='title'
      value={this.props.data.title}
      onChangeText={value => this.setState({ value })}
      />
    );
  }
}
class InputFlatList extends React.Component{
  render(){
    return(
      <FlatList
      data={this.props.data.items}
      renderItem={({ data }) => <TextInput
        value={data.key}
        onChangeText={value => setState({ value })}
      />}
    /> 
    );
  }
}

export default function CreateListScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('Camera')} title="Camera" />
      ),
    });
  }, [navigation]);
  gen=createItemID()
  this.state = {
    id:createUUID().value,
    title:'',
    items:[
      {
        key: gen.next().value.toString(),
      },
    ],
    groups:'',
    complete:false,
  };
  return (
    <Fragment>
      <IputTextField
      data = {this.state.title}
      />
      <InputFlatList 
        data = {this.state.items}
      />
    </Fragment>
    );
  }