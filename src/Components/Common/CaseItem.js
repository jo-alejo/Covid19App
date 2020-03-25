import React, {Component} from 'react';
import {Right, Text, Icon, ListItem, List, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';

class CaseItem extends Component {
  onRowPress() {
    Actions.updateCase({case: this.props.case});
  }
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
            <Icon onPress={this.onRowPress.bind(this)} name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    );
  }
}

export default CaseItem;
