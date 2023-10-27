import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../theme/AppTheme'

interface Props {
    text: string,
    onPress: () => void
}

const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity 
        style={styles.roundedBtn}
        onPress={() => onPress()}
    >
        <Text
            style={styles.txtBtn}
        >{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundedBtn: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15 
    },
    txtBtn: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default RoundedButton
