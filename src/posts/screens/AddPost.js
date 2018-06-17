import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

class AddPost extends PureComponent {

  static propTypes = {
    componentId: PropTypes.string
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        },
        rightButtons: [{
          id: 'saveBtn',
          title: 'Save'
        }],
        leftButtons: [{
          id: 'cancelBtn',
          title: 'Cancel'
        }]
      }
    };
  }

  onNavigationButtonPressed(buttonId) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'saveBtn') {
      alert('saveBtn');
    }
  }

  render() {
    return (
      <View flex center bg-green60>
        <Text>Add Post Screen</Text>
      </View>
    );
  }
}

export default AddPost;
