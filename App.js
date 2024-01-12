import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './src/navigations/TabNavigation';
import {firestore} from "./firebaseConfig";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

  );
}

/*
const firebaseConfig = {
  apiKey: "AIzaSyDcwbktzd9t_iIZMLoojCxNlf-LrISphgM",
    authDomain: "hayoung-test.firebaseapp.com",
    projectId: "hayoung-test",
    storageBucket: "hayoung-test.appspot.com",
    messagingSenderId: "406289385291",
    appId: "1:406289385291:web:50184b53f2158549ae0ace",
    measurementId: "G-KSMK3WS0PT"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 날짜 선택 시 그 날짜에 소비 지출 내역 출력 함수
function displayExpenseDetails(selectedDate) {
  getExpenseForDate(selectedDate)
  .then((doc) => {
      const expenseDetailContainer = document.getElementById('expense-details-container');
      expenseDetailContainer.innerHTML = '';

      if (doc.exists) {
          const expenseData = doc.data(); 
          showExpenseDetails(expenseData);
      }
      else {
          console.log('No default expense for selected date');
      }
  })
  .catch((error) => {
      console.error('Error getting expense details:', error);
  });
}

// 앱에서 어떻게 보이게 할지...? 이 부분은 같이 해야할 것 같음...
function showExpenseDetails(expenseData){
  const expenseDetailContainer = document.getElementById('expense-details-container');

  if (!expenseData) {
      expenseDetailContainer.innerHTML = '';
      return;
  }

  const detailsHTML = '';

  expenseDetailContainer.innerHTML = detailsHTML;
}

// 선택한 날짜에 지출 데이터를 입력하면 데이터를 저장하는 함수
function addExpenseForData(selectedDate, expenseData) {
  db.collection('expenses').doc(selectedDate).set(expenseData);
}

// 캘린더에 있는 버튼을 눌렀을 때 지출 추가 탭 오픈
document.getElementById('calendar_plusBtn').addEventListener('click', () => {
  openExpenseAdditionTab();
});

// 지출 추가 탭에서 저장 버튼을 눌렀을 때 데이터가 저장되고 탭이 닫힘
document.getElementById('calendar_saveBtn').addEventListener('click', () => {
  const selectedDate = getSelectedDate();
  const expenseData = getExpenseDataFromForm();
  addExpenseForData(selectedDate, expenseData);
  closeExpenseAdditionTab(); 
});

// 지출 추가 탭 오픈 함수
function openExpenseAdditionTab() {
  const expenseAdditionTab = document.getElementById('expense-additional-tab');
  expenseAdditionTab.style.display = 'block';
}

// 프론트랑 해서 날짜가 클릭되면 선택되는 함수...
function getSelectedDate() {
  const selectedDateElement = document.getElementById('calendar-element-id'); //이부분은 뭐쓸지 몰라서 걍 달력 UI쓴다고 하면...?
  const selectedDate = selectedDateElement.value;

  return selectedDate;
}

// 지출 추가 탭 닫는 함수
function closeExpenseAdditionTab() {
  const expenseAdditionTab = document.getElementById('expense-additional-tab');
  expenseAdditionTab.style.display = 'none';
}

// 지출 기록 추가 시 저장될 데이터
function getExpenseDataFromForm() {
  const amount = document.getElementById('expense-item-amount').value;
  const item = document.getElementById('expense-item-name').value;
  const cost = document.getElementById('expense-item-price').value;
  const pay = document.getElementById('expense-item-pay').value;
  const shop = document.getElementById('expense-item-shop').value;
  const tag = document.getElementById ('expense-item-tag').value;
  const memo = document.getElementById('expense-item-memo').value;

  return {
      amount,
      item,
      cost,
      pay,
      shop,
      tag,
      memo
  };
}

// 날짜를 선택했을 때 그 날짜의 지출 기록이 보이도록 하는 함수
function getExpenseForDate(selectedDate) {
  return db.collection('expenses').doc(selectedDate).get();
}

//예시: 소비 지출 추가 형식
const userInput = {
  date: "2022-01-05",
  expense: [
      {amount: 2, cost: 8000, item: "당근"},
      {amount: 300, cost: 40000, item: "소고기"}
  ],
  pay: "카드",
  shop: "Lotte Mart",
  tag: "장보기",
  memo: "weekly shopping"
};

// 사용자 입력을 받아 Firestore에 저장하는 함수
function saveUserInputToFirestore(userInput) {
  // 예시: 현재 날짜를 선택한 경우
  const selectedDate = new Date().toISOString().split('T')[0];
  
  const expenseData = {
    date: selectedDate,
    expenses: userInput.expenses,
    pay: userInput.pay,
    shop: userInput.shop,
    tag: userInput.tag,
    memo: userInput.memo
  };

  // Firestore에 저장
  db.collection('expenses').doc(selectedDate).set(expenseData)
    .then(() => {
      console.log("successfully saved to Firestore");
    })
    .catch((error) => {
      console.error("Error saving to Firestore:", error);
    });
}


// 사용자가 입력한 내용을 Firestore에 저장
saveUserInputToFirestore(userInput);

  // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> 이건 firebase에서 추가할꺼

  // 도넛 그래프와 꺾은선 그래프를 그리는 함수
  function drawGraph(expenseData) {
      // 도넛 그래프를 그릴 캔버스 요소 가져오기
      const donutChartCanvas = document.getElementById('donut-chart');
  
      // 꺾은선 그래프를 그릴 캔버스 요소 가져오기
      const lineChartCanvas = document.getElementById('line-chart');

      // 도넛 그래프 데이터 구성
      const donutChartData = {
      labels: ['외식', '장보기', '배달'],
      datasets: [{
          data: [/* Calculate the total amount for each category ],
      }],
  };

  // 꺾은선 그래프 데이터 구성
  const lineChartData = {
    labels: ['이전달1', '이전달2', '이전달3', '이전달4', '이전달5', '현재월'],
    datasets: [{
      label: '지출 금액',
      data: [/* Calculate the total amount for each month ],
      fill: false,
    }],
  };

  // 도넛 그래프 그리기
  const donutChart = new Chart(donutChartCanvas, {
    type: 'doughnut',
    data: donutChartData,
  });

  // 꺾은선 그래프 그리기
  const lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: lineChartData,
  });
}
*/