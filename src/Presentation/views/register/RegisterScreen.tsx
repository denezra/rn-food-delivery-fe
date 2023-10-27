import React from 'react'
import { Text, TextInput, ToastAndroid, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RoundedButton from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

export const RegisterScreen = () => {
  
  const {name, lastName, email, phone, password, confirmPassword, onChange, register} = useViewModel()

  return (
    // COLUMN
    <View style={styles.container}>
      
      <Image 
        source = { require('../../../../assets/chef.jpg') }
        style={styles.imageBg}
      />

      <View style={styles.logoContainer}>
        <Image 
          source={ require('../../../../assets/user_image.png')}
          style={styles.logoImg}
        />
        <Text style={styles.logoTxt}>Select An Image</Text>
      </View> 
      
      <View style={styles.form}>

        <Text style={ styles.formTxt }>Registration Form</Text>
        {/* TODO: Componentize Email and Password */}
        <CustomTextInput 
          placeHolder='Name'
          keyboardType='default'
          image={require('../../../../assets/user.png')}
          property='name'
          onChangeText={onChange}
          value={name}
        />

        <CustomTextInput 
          placeHolder='Family Name'
          keyboardType='default'
          image={require('../../../../assets/my_user.png')}
          property='lastName'
          onChangeText={onChange}
          value={lastName}
        />

        <CustomTextInput 
          placeHolder='Email Address'
          keyboardType='email-address'
          image={require('../../../../assets/email.png')}
          property='email'
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput 
          placeHolder='Telephone/Cellphone'
          keyboardType='numeric'
          image={require('../../../../assets/phone.png')}
          property='phone'
          onChangeText={onChange}
          value={phone}
        />

        <CustomTextInput 
          placeHolder='Password'
          keyboardType='default'
          image={require('../../../../assets/password.png')}
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <CustomTextInput 
          placeHolder='Confirm Password'
          keyboardType='default'
          image={require('../../../../assets/confirm_password.png')}
          property='confirmPassword'
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          {/* <Button 
            title='ENTER' 
            onPress={ () => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
            color='orange'
          /> */}
          <RoundedButton text="Confirm" onPress={() => register()}/>
        </View>

      </View>

    </View>
  ); 
}

