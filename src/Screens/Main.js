import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5, Ionicons, EvilIcons, Entypo } from '@expo/vector-icons';
import LineGraph from "../components/LineGraph";
import DonutChart from "../components/DonutChart";
//import TruffleLogo from "../assets/image/TruffleLogo.png";

const Main = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView>
      <View style={{ flexDirection: 'row',}}>
        <Text style={Styles.Texts}>
          Truffle
        </Text>

        <TouchableOpacity onPress={navigation.navigate('RecipeView')}>
          <FontAwesome5 name="bell" size={28} color="#99A5B3" marginTop= {74} marginLeft = {185}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={navigation.navigate('RecipeView')}>
          <Ionicons name="md-alarm-outline" size={34} color="#99A5B3" marginTop= {70} marginLeft= {20}/>
        </TouchableOpacity>
      </View>

      
      <DonutChart/>
      <LineGraph />
      
      </ScrollView>
    </View>
  );
}

/*
     
      <Image source ={TruffleLogo}/>   
      
*/
const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  Texts: {
    color: '#474646',
    //font-family: NanumGothic,
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 80,
  },
  Bell:{
    size: 50,
    color: "#99A5B3",
    marginTop: 80,
  }
})
export default Main;