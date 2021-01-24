import React, { useRef } from "react"
import {
  StyleSheet,
  PanResponder,
  Animated,
  Image,
} from "react-native";

import { images } from '../../assets'

const getAngle = (index, size) => (size <= 1) ? '0deg': `${index * (50 / (size - 1)) - 25}deg`

const getTop = (index, size) => (size <= 1) ? 0 : (index < (size / 2)) ? index : size - 1  - index 

const Card = ({ positionX, index, size }) => {


  const pan = useRef(new Animated.ValueXY()).current 

  let val = { x:0, y:0 }

  pan.addListener(value => val = value)
   
  panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: pan.x, dy: pan.y }
      ], false),
      onPanResponderRelease: () => {
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
      {
        rotateZ: getAngle(index, size)
      }
    ]
  }
  return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.card,  { left: positionX, top:  140 - getTop(index, size) * (180 / ((size == 0) ? 1 : size)) } ]}
      >
        <Image source={images.card} style={styles.image} />
      </Animated.View>
  )
}


const styles = StyleSheet.create({
  card:{
    position:'absolute',
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
  },
  image:{
    width:'100%',
    height:'100%'
}
})

export default Card 