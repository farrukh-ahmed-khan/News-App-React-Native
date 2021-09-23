import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavigation from './Pages/config/navigation';
import { NativeBaseProvider } from 'native-base';
const App= () => {
  return (
    <NativeBaseProvider>

    <>
    <AppNavigation/>
    </>
    </NativeBaseProvider>
      
      
  );
};

const styles = StyleSheet.create({
 veiwmain:{
   backgroundColor:'white',
   flex:1
 }
});

export default App;
