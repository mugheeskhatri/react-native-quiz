import React, { useState } from 'react'
import Appnavigation from './navigation/navigation';
import TabNavigation from './navigation/TabNavigation';
import { Provider } from 'react-redux';
import Camera from './src/screens/Camera';
import store from './src/screens/store';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { TouchableOpacity, View ,Text, Image } from 'react-native';
// import DrawerNavigation from './navigation/Drawer';
function App(){
  return(
    <Provider store={store}>
      <Appnavigation />
      {/* <TabNavigation /> */}
      {/* <DrawerNavigation /> */}
      {/* <View style={{flex:1}} >
       <View style={{flex:1}}>
       <TouchableOpacity style={{borderWidth:1,padding:10,width:"40%",marginTop:20}} onPress={()=>{ 
           const option={
              mediaType:'photo',
              includeBase64:true
            }
            launchCamera(option,(response)=>{
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response.assets[0].uri)
            }})
          } }>
          <Text >Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,padding:10,width:"40%",marginTop:20}} onPress={()=>{ 
           const option={
              mediaType:'photo',
              includeBase64:true
            }
            launchImageLibrary(option,(response)=>{
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response.assets[0].uri)
            }})
          } }>
          <Text >Open Gallery</Text>
        </TouchableOpacity>
       </View>
      </View> */}
      
    </Provider>
  )
}

export default App;