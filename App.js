
import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store'
import {getPosts,addPosts} from './src/Action'
import {useDispatch,useSelector} from 'react-redux'
import Item from './Item'
const App = () => {
  return (
   <>
   <Provider store={store}>
      <Item />
   </Provider>
   </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
