import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import CardHero from './app/components/CardHero'
import Hand from './app/components/Hand'

const App = () => {

  const [layout, setLayout] = useState({width: 100, height: 100, x: 0, y:0})

  const onLayout = ({ nativeEvent }) =>  {
    setLayout(nativeEvent.layout)
  }

  return (
    <>
     <View style={{ flex: 1 }} onLayout={onLayout}>
         
          <Hand parentLayout={layout} />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F5F5F5'
  }
})

export default App
