import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity , StyleSheet,} from 'react-native';
import {Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import DropDownPicker from 'react-native-dropdown-picker';

function LineGraph () {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState({label: '최근 1주', value: '1'});
   const [items, setItems] = useState([
      { label: '최근 1주', value: '1' },
      { label: '최근 1개월', value: '2' },
      { label: '최근 3개월', value: '3' },
      { label: '최근 6개월', value: '4' },
      { label: '최근 1년', value: '5' },
   ]);
   const [currentValue, setCurrentValue] = useState(1);
 
   // 드롭다운 메뉴를 선택할 때마다 값 변경
   const onChange = (value, index) => {
     switch(value) {
       case '1': setCurrentValue(1); break;
       case '2': setCurrentValue(2); break;
       case '3': setCurrentValue(3); break;
       case '4': setCurrentValue(4); break;
       case '5': setCurrentValue(5); break;
       default: setCurrentValue(1);
     }
   }

  return (
    <View style={Styles.container}>
      <Text style={Styles.Texts}>
        지출 추이
      </Text>
      
      <View style={Styles.dropdown_container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          placeholder="최근 1주"
          setOpen={setOpen}
          dropDownDirection="BOTTOM"
          setValue={setValue}
          setItems={setItems}
          height={30}
          onChangeValue={onChange} // 값이 바뀔 때마다 실행
          listItemContainerStyle={Styles.dropdown}
        />
      </View>
    
    {currentValue === 1 && ( //현재 값에 따라 나올 컴포넌트 변경
      <View>
      <LineChart
      data={data}
      width={320}
      height={220}
      withVerticalLines={false}
      chartConfig={chartConfig}
      bezier
      />
      </View>
    )}

    {currentValue === 2 && ( //현재 값에 따라 나올 컴포넌트 변경
      <View>
      <LineChart
      data={data2}
      width={320}
      height={220}
      withVerticalLines={false}
      chartConfig={chartConfig}
      bezier
      />
      </View>
    )}

    {currentValue === 3 && ( //현재 값에 따라 나올 컴포넌트 변경
      <View>
      <LineChart
      data={data3}
      width={320}
      height={220}
      withVerticalLines={false}
      chartConfig={chartConfig}
      bezier
      />
      </View>
    )}

    {currentValue === 4 && ( //현재 값에 따라 나올 컴포넌트 변경
      <View>
      <LineChart
      data={data4}
      width={320}
      height={220}
      withVerticalLines={false}
      chartConfig={chartConfig}
      bezier
      />
      </View>
    )}

    {currentValue === 5 && ( //현재 값에 따라 나올 컴포넌트 변경
      <View>
      <LineChart
      data={data5}
      width={320}
      height={220}
      withVerticalLines={false}
      chartConfig={chartConfig}
      bezier
      />
      </View>
    )}
    </View>
  );
}
////////////////////그래프//////////////
const data = {
  labels: ["Sun","Mon", "Tue", "Wed", "Thu", "Sat",],
  datasets: [
    {
      data: [30, 20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data2 = {
  labels: ["week1","week2", "week3", "week4", ],
  datasets: [
    {
      data: [30, 50, 45, 89, 80,],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data3 = {
  labels: ["month1","month2", "month3",  ],
  datasets: [
    {
      data: [130, 210,300],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data4 = {
  labels: ["m1","m2", "m3", "m4","m5","m6", ],
  datasets: [
    {
      data: [130, 210,300, 250, 110, 280],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data5 = {
  labels: [ "m1","m2", "m3", "m4","m5","m6", "m7","m8", "m9", "m10","m11", "m12",  ],
  datasets: [
    {
      data: [130, 210,300, 250, 110, 280, 130, 210,300 ,400, 123, 302],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};
//////////////////////////////////////

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*0.9,
    height:Dimensions.get('window').height *0.35,
    backgroundColor: 'white',
    padding: 10,
    margin:20,
    marginTop:10,
    borderColor:'black',
    borderRadius:12,
  },

  Texts: {
    color: '#838383',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 12,
    marginLeft: 10,
  },

  dropdown_container: {
    marginLeft: 180,
    width:130,
    zIndex: 1000,
  },
  dropdown: {
    height:30,
  }
})

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(55, 55, 55, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 11,
  useShadowColorFromDataset: true,
};

export default LineGraph;