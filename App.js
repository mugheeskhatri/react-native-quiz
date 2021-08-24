import React from 'react'
import Appnavigation from './navigation/navigation';
import TabNavigation from './navigation/TabNavigation';
import { Provider } from 'react-redux';
import store from './src/screens/store';
// import DrawerNavigation from './navigation/Drawer';
function App(){
  return(
    <Provider store={store}>
      <Appnavigation />
      {/* <TabNavigation /> */}
      {/* <DrawerNavigation /> */}
      
    </Provider>
  )
}

export default App;