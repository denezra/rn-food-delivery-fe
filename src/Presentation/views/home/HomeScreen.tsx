import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text, TextInput, ToastAndroid, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const HomeScreen = () => {
  
  const {email, password, onChange} = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    // COLUMN
    <View style={styles.container}>
      
      <Image 
        source = { require('../../../../assets/chef.jpg') }
        style={styles.imageBg}
      />

      <View style={styles.logoContainer}>
        <Image 
          source={ require('../../../../assets/logo.png')}
          style={styles.logoImg}
        />
        <Text style={styles.logoTxt}>Food App</Text>
      </View>

      <View style={styles.form}>

        <Text style={ styles.formTxt }>Log In</Text>

        <CustomTextInput 
          image={require('../../../../assets/email.png')}
          placeHolder='Email'
          value={email}
          property='email'
          keyboardType='email-address'
          onChangeText={onChange}
        />

        <CustomTextInput 
          image={require('../../../../assets/password.png')}
          placeHolder='Password'
          value={password}
          property='password'
          keyboardType='default'
          onChangeText={onChange}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30, marginBottom: 15 }}>
          {/* <Button 
            title='ENTER' 
            onPress={ () => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
            color='orange'
          /> */}
          <RoundedButton text="Login" onPress={() => {
            console.log('====================================');
            console.log(`email ${email}`);
            console.log(`password ${password}`);
            console.log('====================================');
          }}/>
        </View>


        <View style={styles.formRegister}>
          <Text>Not Register Yet?</Text>
          <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterTxt}>Register Here</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  ); 
}

