import React, { useRef } from "react"
import {
  StyleSheet,
  PanResponder,
  Animated,
  Image,
} from "react-native";

import { images } from '../../assets'

const Card = () => {


  const pan = useRef(new Animated.ValueXY()).current 

  let val = { x:0, y:0 }

  pan.addListener(value => val = value)
   
  panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: pan.x, dy: pan.y }
      ], false),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(pan, {
          useNativeDriver: false,
          toValue: { x: 0, y: 0 },
          friction: 5
        }).start()
      }
   })


  const panStyle = {
    transform: [
      ...pan.getTranslateTransform(),
    ]
  }
  return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.card]}
      >
        <Image source={images.card} style={styles.card} />
      </Animated.View>
  )
}


const styles = StyleSheet.create({
  card:{
    width: 120,
    height: 166,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

export default Card 