import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';

class PostsList extends PureComponent {

  static propTypes = {
    componentId: PropTypes.string
  };

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
    this.showAddPostModal = this.showAddPostModal.bind(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
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

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'blog.AddPost',
          }
        }]
      }
    });
  }



  render() {
    return (
      <View flex center bg-blue60>
        <Text text40 onPress={this.pushViewPostScreen}>Posts List Screen</Text>
      </View>
    );
  }
}

export default PostsList;
