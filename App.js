
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}> 20 caracteres</Text>

      <View style={styles.area}> 
        <Slider
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FFF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#golden"

        />
      </View>
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

});
