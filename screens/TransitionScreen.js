import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class TransitionScreen extends Component {

  navWithBottomTransition = () => {
    this.props.navigation.navigate('Search', { transition: 'bottomTransition' });
  };

  navWithSideTransition = () => {
    this.props.navigation.navigate('Settings', { transition: 'sideTransition' });
  };

  navWithFadeTransition = () => {
    this.props.navigation.navigate('Card', { transition: 'fadeTransition' });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          buttonStyle={{ margin: 10 }}
          title="Button Transition"
          onPress={this.navWithBottomTransition}
        />
        <Button
          buttonStyle={{ margin: 10 }}
          title="Side Transition"
          onPress={this.navWithSideTransition}
        />
        <Button
          buttonStyle={{ margin: 10 }}
          title="Fade Transition"
          onPress={this.navWithFadeTransition}
        />
      </View>
    )
  }
}

TransitionScreen.navigationOptions = {
  title: 'Transitions',
};
