import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

import {Modalpassword} from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password)
    setModalVisible(true)


  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} characters</Text>

      <View style={styles.area}> 
        <Slider
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FFF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#FFD700"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={generatePassword}> Generate your password</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}> 
        <Modalpassword password={passwordValue} handleClose={()=> setModalVisible (false)}/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60,
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  button:{
    backgroundColor: "#FFD700",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,

  },

  buttonText:{
    color: "#000",
    fontSize: 20,
  },  

});
