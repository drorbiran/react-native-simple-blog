import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';

class PostsList extends PureComponent {

  static propTypes = {
    navigator: PropTypes.object,
    componentId: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          text: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Post1'
            }
          }
        }
      }
    });
  }



  render() {
    return (
      <View flex center bg-blue60>
        <Text onPress={this.pushViewPostScreen}>Posts List Screen</Text>
      </View>
    );
  }
}

export default PostsList;
