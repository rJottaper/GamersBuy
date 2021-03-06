import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PageOne from '../Screens/Welcome/PageOne';
import PageTwo from '../Screens/Welcome/PageTwo';
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="PageOne" component={PageOne} />
      <Screen name="PageTwo" component={PageTwo} />
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  )
};

export default AppRoutes;

