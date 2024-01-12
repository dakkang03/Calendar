import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Dimensions} from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Texts}>
        Settings page
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  Texts: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 80,
  },
})
export default Main;