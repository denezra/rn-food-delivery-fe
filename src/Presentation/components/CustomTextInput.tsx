import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    image: any,
    placeHolder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeHolder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={image}
          />
          <TextInput 
            style={ styles.formTextInput }
            placeholder={placeHolder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={ text => onChangeText(property, text) }
            secureTextEntry={secureTextEntry}
          />
        </View>
  )
}

const styles = StyleSheet.create({
    formIcon: {
    width: 25,
    height: 25,
    marginTop: 5
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30
  },
  formTextInput: {
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15
  },
})