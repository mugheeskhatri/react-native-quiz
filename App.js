import React, { useState } from 'react'
import Appnavigation from './navigation/navigation';
import TabNavigation from './navigation/TabNavigation';
import { Provider } from 'react-redux';
import Camera from './src/screens/Camera';
import store from './src/screens/store';
import { TouchableOpacity, View ,Text, Image } from 'react-native';
// import DrawerNavigation from './navigation/Drawer';
function App(){
  const [camera, setCamera] = useState(false);
  const [flip , setFlip] = useState(false);
  const [uri , setUri] = useState('')
  return(
    <Provider store={store}>
      {/* <Appnavigation /> */}
      {/* <TabNavigation /> */}
      {/* <DrawerNavigation /> */}
      <View style={{flex:1}} >
       <View style={{flex:1}}>
       <TouchableOpacity>
          <Text onPress={()=>setCamera(true)}>Open Camera</Text>
        </TouchableOpacity>
       <View style={{marginTop:30}}>
       <TouchableOpacity>
          <Text onPress={()=>setFlip(!flip)}>Flip Camera</Text>
        </TouchableOpacity>
       </View>
       </View>
        <View>
        {camera ? <Camera flip={flip}/> : null}
        </View>
        {uri ? <View><Image source={{uri:uri}} style={{width:400,height:600}} /></View> : null}
      </View>
      
    </Provider>
  )
}

export default App;