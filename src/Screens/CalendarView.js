import React, { Component, useState, useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { Agenda,  } from 'react-native-calendars';
import CalendarDayComponent from "../components/CalendarDayComponent";

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      //<View>
        //<Text style={styles.Texts}>
          //Calendar
        //</Text>
      <Agenda
      style={
        {}
      }
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        theme={{
          textDayFontWeight: 'bold', // 날짜 서체
          textDayFontSize: 15, // 캘린더 날짜 글씨 크기
          todayTextColor: '#FEA655',
          agendaDayTextColor: '#D4D4D4',
          agendaDayNumColor: '#D4D4D4',
          agendaTodayColor: '#FEA655',
          //agendaKnobColor: '#9C9C9C',
          //indicatorColor: '#FEA655', //로딩 색깔
          selectedDayBackgroundColor: '#FEA655',
          
        }}
        dayComponent={CalendarDayComponent}
        showOnlySelectedDayItems={true}
        markedDates={{
          '2024-01-23': {soldOut: false, blocked: false, inventory: 2000},
          '2024-01-24': {soldOut: false, blocked: false, inventory: 3000},
          '2024-01-26': {soldOut: false, blocked: true, inventory: 9865}
        }} 
       renderEmptyData={true}
        
       renderItem={this.renderItem.bind(this)}
      // markingType={'period'}
      //markedDates={{
      // '2017-05-26': {endingDay: true, color: 'gray'}}}
      //monthFormat={'yyyy'}
      //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
      //</View>
    );
  }
  
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={styles.container}>
      <View style={styles.item}>
        <Text>고등어 3000원 </Text>
        </View>
      </View>
    );
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    marginTop:20,
    height:500,

  },
  
  ExpenseBox: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.8,
    marginTop: 10,
    marginBottom: 10,
    padding: 8
  },

  item: {
    backgroundColor: 'pink',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30,
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
});
