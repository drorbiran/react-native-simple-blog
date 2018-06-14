import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';

class AddPost extends PureComponent {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post'
        }
      }
    };
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
