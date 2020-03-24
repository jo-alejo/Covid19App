import React, {Component} from 'react';
import {Right, Text, Icon, ListItem, List, Body} from 'native-base';
import {StyleSheet} from 'react-native';

class CaseItem extends Component {
  render() {
    const {patientCode, patientName} = this.props.case;
    return (
      <List>
        <ListItem>
          <Body>
            <Text>
              {patientCode} - {patientName}
            </Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  cardItemS: {
    flex: 1,
  },
});

export default CaseItem;
