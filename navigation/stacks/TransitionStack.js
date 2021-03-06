import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from "react-navigation";
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';
import BottomTransition from '../transitions/BottomTransition';
import FadeTransition from '../transitions/FadeTransition';
import SideTransition from '../transitions/SideTransition';
import TransitionScreen from '../../screens/TransitionScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SearchScreen from '../../screens/SearchScreen';
import CardScreen from '../../screens/CardScreen';
import DetailsScreen3 from '../../screens/DetailsScreen3';
import _ from 'lodash';

const TransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      timing: Animated.timing,
    },
    screenInterpolator: (screenProps) => {
      const transition = (_.get(screenProps, 'scene.route.params.transition') || 'fadeTransition');
      return {
        bottomTransition: BottomTransition(screenProps),
        sideTransition: SideTransition(screenProps),
        fadeTransition: FadeTransition(screenProps),
      }[transition]
    }
  }
};

const TransitionStack = createStackNavigator(
  {
    Transitions: TransitionScreen,
    Settings: SettingsScreen,
    Search: SearchScreen,
    Card: CardScreen,
  },
  {
    ...StackNavConfigDefault,
    transitionConfig: TransitionConfig,
    headerMode: 'screen',
    mode: 'modal',
    transparentCard: true,
  }
);

TransitionStack.navigationOptions = {
  tabBarLabel: 'Transitions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-barcode'}/>
  ),
};

TransitionStack.path = '';

export default TransitionStack;