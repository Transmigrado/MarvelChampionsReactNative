import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from '../Card'

const WIDTH = 500
const CARD_WIDTH = 120
const DIFF = WIDTH - CARD_WIDTH

const Hand = ({ parentLayout }) => {

    const [cards, setCards] = useState([])


    const addCard = () => {
        setCards([...cards, {}])
    }

    const removeCard = () => {
        const newCards = [...cards]
        newCards.pop()
        setCards(newCards)
    }

    return (
        <View style={[styles.container, { width: 500, left: (parentLayout.width - 500) / 2 }]} >
            <TouchableOpacity onPress={addCard}>
                <Text>Agregar Carta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeCard}>
                <Text>Remover Carta</Text>
            </TouchableOpacity>
            {cards.map((item, index) =>  <Card positionX={DIFF / (((cards.length <= 1) ? 2 : cards.length) - 1) * index} index={index} size={cards.length} />)}        
        </View>
    )

}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 300,
        borderBottomColor: 'red',
        borderWidth: 1,
        position: 'absolute',
        top: 150,
    }
})

export default Hand


