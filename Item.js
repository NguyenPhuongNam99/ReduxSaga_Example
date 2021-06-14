
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

import {getPosts,addPosts} from './src/Action'
import {useDispatch,useSelector} from 'react-redux'
const Item = () => {

  const [title,setTitle] = useState('')
  const dispatch = useDispatch()
  const [description,setDecription] = useState('')
 const posst = useSelector(state=>state.post)
console.log('post0',posst)
  return (
   <>
   <View>
      <TouchableOpacity 
         style={{justifyContent:'center',alignItems:'center',height:35,backgroundColor:'orange',marginBottom:15}}
         onPress={()=>dispatch(getPosts())}
         >
        
        <Text style={{color:'white'}}>Get Data</Text>
      </TouchableOpacity>
      <TextInput placeholder='DataOnce' 
         style={{borderWidth:1,marginBottom:15}} 
         onChange ={(e)=>setTitle(e.target.value)}
         />
      <TextInput placeholder='DataOnce'  
         style={{borderWidth:1,marginBottom:15}}
         onChange ={(e)=>setDecription(e.target.value)}
         />
      <TouchableOpacity 
        onPress={()=>dispatch(addPosts({title,description}))}
        style={{justifyContent:'center',alignItems:'center',height:35,backgroundColor:'orange',marginBottom:15}}>
        <Text style={{color:'white'}}>Post Data</Text>
      </TouchableOpacity>

    <Text>
        
    </Text>
    <Text>
   {
       posst && posst ? <Text> {posst[0].title} </Text> : null
   }
</Text>
    </View>
   </>
  );
};

const styles = StyleSheet.create({
  
});

export default Item;
