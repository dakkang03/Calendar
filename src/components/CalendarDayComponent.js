import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const weekDaysNames = ['일', '월', '화', '수', '목', '금', '토'];

class CalendarDayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  getContentStyle() {
    const { state, marking = {}, date, current } = this.props;
    const style= {
      content: {},
      text: {
        color: 'black'
      }
    };

    if (marking.soldOut) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#e35052';
      style.content.borderRadius = 50;
    } else if (state === 'today') {
      style.text.color = '#fff';
      style.content.backgroundColor = '#FEA655';
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = '#FEA655';
    }
    return style;
  }

  getFooterTextStyle() {
    const { marking = {} } = this.props;
    const style = {
      color: '#D4D4D4',
      fontSize:10,
    };

    if (marking.inventory > 0) {
      style.color = 'red';
    }
    return style;
  }

  getInventoryCount() {
    const { marking = {} } = this.props;
    if (typeof marking === 'object') {
      if (marking.inventory >= 0) {
        return marking.inventory;
      }
    }
    return '';
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
    const contentStyle = this.getContentStyle();

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.content, contentStyle.content]}
          onPress={this.onDayPress}
        >
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(this.props.children)}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={this.getFooterTextStyle()}>
            {this.getInventoryCount()}
          </Text>
        </View>
      </View>
    );
  }
}

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#d4d4d4'
  },
  content: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 15,
    fontWeight:'bold'
  }
});

export default CalendarDayComponent;