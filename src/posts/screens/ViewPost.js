import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';

class ViewPost extends PureComponent {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <View flex center bg-red60>
        <Text>View Post Screen</Text>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default ViewPost;
