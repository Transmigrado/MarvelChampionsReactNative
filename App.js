import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import CardHero from './app/components/CardHero'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <CardHero />
        </View>
      </SafeAreaView>
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
