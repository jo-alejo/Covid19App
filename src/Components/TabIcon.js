import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TabIcon extends Component {
  render() {
    let color = this.props.focused ? '#32408f' : '#7280ce';
    return (
      <View style={style.viewStyle}>
        <Icon
          style={{color: color}}
          name={this.props.iconName || 'ios-radio-button-off'}
          size={28}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default TabIcon;
