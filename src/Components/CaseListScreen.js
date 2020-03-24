import _ from 'lodash';
import React, {Component} from 'react';
import {Container, Text, List, ListItem} from 'native-base';
import {connect} from 'react-redux';
import {caseFetch} from '../Actions';

class CaseListScreen extends Component {
  componentDidMount() {
    this.props.caseFetch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cases.lenght !== this.props.cases.lenght) {
      this.props.caseFetch();
    }
  }
  render() {
    return (
      <Container>
        <List
          dataSource={this.props.cases}
          keyExtractor={item => item.uid}
          renderItem={({item}) => <ListItem case={item} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const cases = _.map(state.case, (val, uid) => {
    return {...val, uid};
  });
  return {cases};
};

export default connect(
  mapStateToProps,
  {caseFetch},
)(CaseListScreen);
