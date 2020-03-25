import _ from 'lodash';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {caseFetch} from '../Actions';
import CaseItem from './Common/CaseItem';

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
    console.log(this.props.cases);
    return (
      <FlatList
        style={{flex: 1}}
        data={this.props.cases}
        keyExtractor={item => item.uid}
        renderItem={({item}) => <CaseItem case={item} />}
      />
    );
  }
}

const mapStateToProps = state => {
  const cases = _.map(state.case, (val, uid) => {
    return {...val, uid};
  });
  return {cases};
};

export default connect(mapStateToProps, {caseFetch})(CaseListScreen);
