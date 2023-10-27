import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBg: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%'
  },
  logoImg: {
    width: 100,
    height: 100
  },
  logoTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5
  },
  formTxt: {
    fontWeight: 'bold',
    fontSize: 16
  },
  formTextInput: {
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  formRegisterTxt: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default HomeStyles;