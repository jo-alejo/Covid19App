import React, {Component} from 'react';
import {Text, Icon, ListItem, List, Body, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

class CaseItem extends Component {
  onEditPress() {
    console.log(this.props.case);
    Actions.updateCase({case: this.props.case});
  }
  onOpenPress() {
    console.log(this.props.case);
    Actions.caseDetail({case: this.props.case});
  }
  render() {
    const {patientCode, patientName} = this.props.case;
    return (
      <List>
        <ListItem>
          <Body>
            <Text style={styles.textStyle}>
              {patientCode} - {patientName}
            </Text>
          </Body>
          <Button transparent style={styles.buttonStyle}>
            <Icon name="open" onPress={this.onOpenPress.bind(this)} />
          </Button>
          <Button transparent style={styles.buttonStyle}>
            <Icon name="create" onPress={this.onEditPress.bind(this)} />
          </Button>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 3,
  },
  textStyle: {
    fontSize: 17,
  },
});

export default CaseItem;
