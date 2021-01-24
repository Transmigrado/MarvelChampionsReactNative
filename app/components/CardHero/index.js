import React, { useRef, useState } from "react"
import {
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity
} from "react-native";

import { images } from '../../assets'

const CardHero = () => {

  const progress = useRef(new Animated.Value(0)).current 
  const [isHero, setIsHero] = useState(false)

   const rotateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const rotateStyle = {
    transform: [
      {
       
        rotateY
      },
      {
        rotateZ: '90deg',
      }
    ]
  }

  const onPress = () => {
    Animated.timing(
      progress,{
        useNativeDriver: false,
        toValue: 0.5,
        duration: 250
    }).start(()=> {
        setIsHero(!isHero)
        Animated.timing(
            progress,{
              useNativeDriver: false,
              toValue: 1,
              duration: 250
          }).start(()=> {
          })
    })
  }



  return (
      <Animated.View style={[rotateStyle, styles.card]}>
        <TouchableOpacity onPress={onPress}>
          <Image source={isHero ? images.card : images.card_ego } style={styles.image} />
        </TouchableOpacity>
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
  },
  image:{
      width:'100%',
      height:'100%'
  }
})

export default CardHero 